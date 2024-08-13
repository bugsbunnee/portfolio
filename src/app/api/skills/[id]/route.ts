import prisma from "@/prisma/client";

import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

import authOptions from "@/app/auth/authOptions";

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.isAdmin) return NextResponse.json({}, { status: 401 });

  const issue = await prisma.issue.findUnique({
    where: { id: params.id },
  });

  if (!issue) return NextResponse.json({ error: "Invalid issue" }, { status: 404 });

  await prisma.issue.delete({ where: { id: issue.id } });
  return NextResponse.json({});
}