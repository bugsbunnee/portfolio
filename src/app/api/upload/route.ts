import _ from 'lodash';

import { NextRequest, NextResponse } from "next/server";
import { uploadImage } from "@/app/services/cloudinary";

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
    const formData = await request.formData();

    const image = formData.get('image') as File | string | null;
    if (!image) return NextResponse.json({ error: "Missing File!" }, { status: 400 });

    const url = await uploadImage(image);
    if (url) return NextResponse.json({ url });

    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
}
