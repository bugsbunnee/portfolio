import _ from 'lodash';

import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';

import { signRequest } from "@/app/services/cloudinary";
import { signatureSchema } from '@/app/utils';

export async function POST(request: NextRequest) {
    const body = await request.json();

    // const validation = signatureSchema.safeParse(body);
    // if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });

    const params = await signRequest(body);
    return NextResponse.json(params, { status: 500 });
};
