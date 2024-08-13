import { User } from "@prisma/client";
import { DefaultSession } from "next-auth";

declare module 'next-auth' {
    interface Session {
        user: { isAdmin?: User['isAdmin'] } & DefaultSession['user']
    }
}