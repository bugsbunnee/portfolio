import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import prisma from "@/prisma/client";

import authOptions from "@/app/auth/authOptions";
import { projectPatchSchema } from "@/app/utils";

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    if (!session || !session.user.isAdmin) return NextResponse.json({}, { status: 401 });
  
    const body = await request.json();
    const validation = projectPatchSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.format(), {
            status: 400,
        });
    }
  
    const project = await prisma.project.findUnique({ where: { id: params.id } });
    if (!project) {
        return NextResponse.json({ error: "Invalid project" }, { status: 404 });
    }
  
    const updatedProject = await prisma.project.update({
      where: { id: project.id },
      data: { ...body },
    });
  
    return NextResponse.json(updatedProject);
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    if (!session || !session.user.isAdmin) return NextResponse.json({}, { status: 401 });

    const project = await prisma.project.findUnique({ where: { id: params.id } });
    if (!project) return NextResponse.json({ error: "Invalid project" }, { status: 404 });

    await prisma.project.delete({ where: { id: project.id } });
    return NextResponse.json({});
}