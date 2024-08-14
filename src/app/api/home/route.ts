import { NextRequest, NextResponse } from "next/server";

import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
    // const skills = await prisma.skill.findMany({ orderBy: { name: 'asc' }});
    const skills: { id: string }[] = [];
    return NextResponse.json({ skills });
}
