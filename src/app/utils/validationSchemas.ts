import { z } from 'zod';
import { IMAGE_VALIDATION_DATA } from './constants';

export const contactSchema = z.object({
    firstName: z.string().min(1, 'Please provide your first name').max(50),
    lastName: z.string().min(1, 'Please provide your last name').max(50),
    email: z.string().email(),
    message: z.string().min(10, 'Please provide a message with at least 10 characters').max(255)
});

export const projectSchema = z.object({
    url: z.string().url(),
    title: z.string().min(5, 'Title must be at least 5 characters'),
    image: z.string(),
    description: z.string().min(10).max(100),
    isConfidential: z.boolean(),
    stack: z.enum(['FRONTEND', 'MOBILE', 'BACKEND', 'FULLSTACK']),
    skills: z.array(z.string()).min(1),
    authorId: z.string().cuid(),
});

export const projectPatchSchema = z.object({
    url: z.string().url().optional(),
    title: z.string().min(5, 'Title must be at least 5 characters').optional(),
    image: z.string().url().optional(),
    description: z.string().min(10).max(50).optional(),
    isConfidential: z.boolean().optional(),
    stack: z.enum(['FRONTEND', 'MOBILE', 'BACKEND', 'FULLSTACK']).optional(),
    skills: z.array(z.string()).min(1).optional(),
});

export const userSchema = z.object({
    firstName: z.string().min(3).max(20),
    lastName: z.string().min(3).max(20),
    isAdmin: z.boolean().default(false),
    email: z.string().email(),
    password: z.string().min(5),
    summary: z.string().min(10).max(255)
});

export const authorizeSchema = z.object({
    email: z.string().email(),
});

export const skillSchema= z.object({
    skillName: z.string().min(3),
});

export const profilePictureSchema = z.object({
    url: z.string().url()
});

export const signatureSchema = z.object({
    publicId: z.string()
});

export const summarySchema = z.object({
    summary: z.string().min(10).max(500),
});

export const userCertificateSchema = z.object({
    title: z.string().min(10).max(30),
    image: z.any()
            .refine((file: File) => file && file.size <= IMAGE_VALIDATION_DATA.MAX_FILE_SIZE, `File must be less than ${IMAGE_VALIDATION_DATA.MAX_FILE_SIZE_MB}MB`)
            .refine((file: File) => file && IMAGE_VALIDATION_DATA.ACCEPTED_IMAGE_TYPES.includes(file.type), `File type not supported!`),
});
