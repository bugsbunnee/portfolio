import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { z } from 'zod';
import { userSchema } from '@/app/utils';

import bcrypt from 'bcrypt';

import prisma  from '@/prisma/client';
import authOptions from "@/app/auth/authOptions";

type UserData = z.infer<typeof userSchema>;

export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions);
    if (!session || !session.user.isAdmin) {
        return NextResponse.json({ error: 'You\'re not allowed to perform this action' }, { status: 401 });
    }

    const body: UserData = await request.json();

    const validation = userSchema.safeParse(body);
    if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });

    const user = await prisma.user.findUnique({ where: { email: body.email } });
    if (user) return NextResponse.json({ error: 'User already exists' }, { status: 400 });

    const hashedPassword = await bcrypt.hash(body.password, 10);
    const newUser = await prisma.user.create({ 
        data: {
            firstName: body.firstName,
            lastName: body.lastName,
            isAdmin: body.isAdmin,
            email: body.email,
            hashedPassword,
            summary: body.summary,
        }
    });

    return NextResponse.json({ email: newUser.email });
}
