import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { projectSchema } from "@/app/utils";

import authOptions from "@/app/auth/authOptions";
import prisma from "@/prisma/client";


export async function GET(request: NextRequest) {
    const projects = await prisma.project.findMany({ orderBy: { title: 'asc' }});
    return NextResponse.json(projects);
}

export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions);
    if (!session || !session.user.isAdmin) return NextResponse.json({}, { status: 401 });

    const body = await request.json();
    const validation = projectSchema.safeParse(body);

    if (!validation.success) return NextResponse.json(validation.error.format(), { status: 400 });

    const author = await prisma.user.findUnique({ where: { id: body.authorId } });
    if (!author) return NextResponse.json({ error: 'Invalid User.'}, { status: 400 });
    

    const newProject = await prisma.project.create({
        data: {
            title: body.title,
            url: body.url,
            image: '',
            description: body.description,
            isConfidential: body.isConfidential,
            authorId: body.authorId,
            stack: body.stack,
        },
        include: {
            skills: true,
        }
    });
    
    return NextResponse.json(newProject, { status: 201 });

}