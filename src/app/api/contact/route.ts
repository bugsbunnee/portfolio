import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
    const messages = await prisma.contact.findMany({ orderBy: { createdAt: 'desc' }});
    return NextResponse.json(messages);
}

// export async function POST(request: NextRequest) {

// }