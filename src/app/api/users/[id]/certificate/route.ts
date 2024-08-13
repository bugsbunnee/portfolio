import authOptions from "@/app/auth/authOptions";

import { uploadImage } from "@/app/services/cloudinary";
import { getServerSession } from "next-auth";
import { userCertificateSchema } from "@/app/utils";
import { NextRequest, NextResponse } from "next/server";

import prisma from "@/prisma/client";

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions);
    if (!session || !session.user.isAdmin) return NextResponse.json({}, { status: 401 });

    const body = await request.formData();

    const validation = userCertificateSchema.safeParse({ title: body.get('title'), image: body.get('image')});
    if (!validation.success) return NextResponse.json(validation.error.format(), { status: 400 });

    const user = await prisma.user.findUnique({ where: { id: params.id } });
    if (!user) return NextResponse.json({ error: "Invalid user" }, { status: 404 });

    const url = await uploadImage(body.get('image') as File);
    if (!url) return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });

    const updatedUser = await prisma.user.update({
        where: { id: user.id },
        data: { certifications: { create: { title: body.get('title') as string, image: url }} },
    });
    
    return NextResponse.json(updatedUser);
}