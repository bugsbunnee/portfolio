import prisma from "@/prisma/client";

import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

import authOptions from "@/app/auth/authOptions";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    if (!session || !session.user.isAdmin) return NextResponse.json({}, { status: 401 });

    const user = await prisma.user.findUnique({ where: { id: params.id } });
    if (!user) return NextResponse.json({ error: "Invalid user" }, { status: 404 });

    const skills = await prisma.project.findMany({
        where: { authorId: params.id },
        distinct: ['id'],
        select: { skill: true }
    });

  return NextResponse.json(skills);
}