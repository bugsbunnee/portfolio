import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
    const totalProjects = await prisma.project.count();
    const totalCertifications = await prisma.certification.count();
    const totalSkills  = await prisma.skill.count();
    const totalMessages = await prisma.contact.count();

    return NextResponse.json({
        totalProjects,
        totalMessages,
        totalCertifications,
        totalSkills
    });
};