import _ from 'lodash';

import { NextRequest, NextResponse } from "next/server";
import { authorizeSchema } from "@/app/utils";
import { getServerSession } from 'next-auth';

import authOptions from "@/app/auth/authOptions";
import prisma from "@/prisma/client";

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    if (!session || !session.user.isAdmin) return NextResponse.json({}, { status: 401 });

    const body = await request.json();

    const validation = authorizeSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 });
    }
  
    const user = await prisma.user.findUnique({ where: { id: params.id }});
    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (!user.isAdmin) {
        const updatedUser = await prisma.user.update({
            where: { id: user.id },
            data: { isAdmin: false }
        });
        
        return NextResponse.json(updatedUser);
    }

    return NextResponse.json({ error: "User already authorized"}, { status: 400 });
}