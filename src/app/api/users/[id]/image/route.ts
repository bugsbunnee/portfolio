import _ from 'lodash';

import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from 'next-auth';

import authOptions from "@/app/auth/authOptions";
import prisma from "@/prisma/client";
import axios from 'axios';

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    if (!session || !session.user.isAdmin) return NextResponse.json({}, { status: 401 });

    const user = await prisma.user.findUnique({ where: { id: params.id } });
    if (!user) return NextResponse.json({ error: "Invalid user" }, { status: 404 });
    
    const formData = await request.formData();

    try {
        const response = await axios.post<{ url: string }>(process.env.NEXTAUTH_URL + 'api/upload', formData);

        const updatedUser = await prisma.user.update({
            where: { id: user.id },
            data: { image: response.data.url }
        });

        return NextResponse.json(updatedUser);
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
