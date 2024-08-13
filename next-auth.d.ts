import { User } from "@/app/utils";
import { DefaultSession } from "next-auth";

declare module 'next-auth' {
    interface Session {
        user: { isAdmin?: User['isAdmin'] } & DefaultSession['user']
    }
}