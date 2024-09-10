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

export function signRequest(paramsToSign: object) {
    const signature = cloudinary.utils.api_sign_request(paramsToSign, config.api_secret as string);

    return { signature };
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