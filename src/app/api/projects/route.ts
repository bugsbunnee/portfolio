import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import authOptions from "@/app/auth/authOptions";
import prisma from "@/prisma/client";

import { projectSchema } from "@/app/utils";
import { uploadImage } from "@/app/services/cloudinary";

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
    
    const url = await uploadImage(body.image);
    if (url) {
        const newProject = await prisma.project.create({
            data: {
                title: body.title,
                url: body.url,
                image: url,
                description: body.description,
                isConfidential: body.isConfidential,
                authorId: body.authorId,
                stack: body.stack,
                skills: {
                    connectOrCreate: {
                        where: {
                            id: {
                                in: body.skills,
                            }
                        },
                        create: {
                            id: {
                                notIn: body.skills,
                            }
                        }
                    }
                },
                include: {
                    skills: true,
                }
            },
        });
    
        return NextResponse.json(newProject, { status: 201 });
    }

    return NextResponse.json({ error: 'Invalid image '}, { status: 400 });

}