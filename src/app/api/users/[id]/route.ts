import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";

import prisma from "@/prisma/client";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    // const session = await getServerSession(authOptions);
    // if (!session || !session.user.isAdmin) return NextResponse.json({}, { status: 401 });

    const user = await prisma.user.findUnique({ where: { id: params.id } });
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    return NextResponse.json(user);
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    if (!session || !session.user.isAdmin) return NextResponse.json({}, { status: 401 });

    const user = await prisma.user.findUnique({ where: { id: params.id }})
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    await prisma.user.delete({ where: { id: user.id }});
    return NextResponse.json({});
}
