import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { skillSchema } from "@/app/utils";

import prisma from "@/prisma/client";

import authOptions from "@/app/auth/authOptions";

export async function GET(request: NextRequest) {
    const skills = await prisma.skill.findMany({
        orderBy: { name: 'asc' },
        select: {
            id: true,
            name: true,
        }
    });

    return NextResponse.json(skills);
}

export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions);
    if (!session || !session.user.isAdmin) return NextResponse.json({ error: 'You\'re not allowed to perform this action' }, { status: 401 });

    const body = await request.json();
    const validation = skillSchema.safeParse(body);
    
    if (!validation.success) {
        return NextResponse.json(validation.error.format(), { status: 400 });
    }

    const skillMatch = await prisma.skill.findFirst({
        where: { name: { equals: body.skillName }},
    });

    if (skillMatch) {
        return NextResponse.json({ error: 'Skill already exists.'}, { status: 400 });
    }

    const newSkill = await prisma.skill.create({ data: { name: body.skillName } });
    return NextResponse.json(newSkill, { status: 201 });
}