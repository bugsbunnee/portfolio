import { z } from 'zod';

export const contactSchema = z.object({
    firstName: z.string().min(1, 'Please provide your first name').max(50),
    lastName: z.string().min(1, 'Please provide your last name').max(50),
    email: z.string().email(),
    message: z.string().min(10, 'Please provide a message with at least 10 characters')
});