import { z } from "zod";
import { NextRequest, NextResponse } from "next/server";

import { summarySchema } from "@/app/utils";
import prisma from "@/prisma/client";

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const body: z.infer<typeof summarySchema> = await request.json();

    const validation = summarySchema.safeParse(body);
    if (!validation.success) return NextResponse.json(validation.error.format(), { status: 400 });
    
    const user = await prisma.user.findUnique({ where: { id: params.id } });
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    await prisma.user.update({
        where: { id: params.id },
        data: { summary: body.summary },
    });

    return NextResponse.json({ message: 'Updated successfully!' });
}