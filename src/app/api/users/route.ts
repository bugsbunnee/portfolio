import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

import authOptions from "@/app/auth/authOptions";
import prisma  from '@/prisma/client';

export async function GET(request: NextRequest) {
    const session = await getServerSession(authOptions);
    if (!session || !session.user.isAdmin) return NextResponse.json({}, { status: 401 });

    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}