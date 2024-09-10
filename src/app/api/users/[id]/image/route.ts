import _ from 'lodash';

import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from 'next-auth';
import { z } from 'zod';

import { profilePictureSchema } from "@/app/utils";

import authOptions from "@/app/auth/authOptions";
import prisma from "@/prisma/client";

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    // const session = await getServerSession(authOptions);
    // if (!session || !session.user.isAdmin) return NextResponse.json({}, { status: 401 });

    const user = await prisma.user.findUnique({ where: { id: params.id } });
    if (!user) return NextResponse.json({ error: "Invalid user" }, { status: 404 });

    const body: z.infer<typeof profilePictureSchema> = await request.json();
    const validation = profilePictureSchema.safeParse(body);

    if (!validation.success) return NextResponse.json(validation.error.format(), { status: 400 });
    
    const updatedUser = await prisma.user.update({
        where: { id: user.id },
        data: { image: body.url }
    });

    return NextResponse.json(updatedUser);
}
