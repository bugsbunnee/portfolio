import { v2 as cloudinary } from 'cloudinary';
import axios from 'axios';
import { IMAGE_VALIDATION_DATA } from '../utils';

interface Response {
    secure_url: string;
}

const config = cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

export function signRequest(publicId: string) {
    const timestamp = Math.round((new Date).getTime() / 1000);
    const eager = "c_pad,h_300,w_400|c_crop,h_200,w_260";

    const signature = cloudinary.utils.api_sign_request({ timestamp, public_id: publicId }, config.api_secret as string);

    return { signature, timestamp, eager, apiKey: config.api_key };
}

export async function uploadImage(file: File | string) {
    const url = `${process.env.NEXT_PUBLIC_CLD_API_URL}/${process.env.NEXT_PUBLIC_CLOUD_NAME}/auto/upload`;
    
    const formData = new FormData();
    const publicID = typeof file === 'string' ? Date.now().toString() : file.name;
    const signedData = signRequest(publicID);

    formData.append("api_key", signedData.apiKey as string);
    formData.append('file', file);
    formData.append('public_id', publicID);
    formData.append("timestamp", signedData.timestamp.toString());
    formData.append("signature", signedData.signature);

    try {
        const result = await axios.post<Response>(url, formData);
        return result.data.secure_url;
    } catch (error) {
        return null;
    }
}

export function validateFile(file: File) {
    if (file.size <= IMAGE_VALIDATION_DATA.MAX_FILE_SIZE) {
        return `File must be less than ${IMAGE_VALIDATION_DATA.MAX_FILE_SIZE_MB}MB`;
    }

    if (IMAGE_VALIDATION_DATA.ACCEPTED_IMAGE_TYPES.includes(file.type)) {
        return 'File type not supported!';
    }

    return '';
}