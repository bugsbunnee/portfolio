import { NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { User } from '@/app/utils';

import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from 'next-auth/providers/github';

import bcrypt from 'bcrypt';
import prisma from '@/prisma/client';

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
              email: {
                label: "Email",
                type: "email",
                placeholder: "Email",
              },
              password: {
                label: "Password",
                type: "password",
                placeholder: "Password",
              },
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials.password) return null;
        
                const user = await prisma.user.findUnique({ where: { email: credentials.email }});
                if (!user) return null;
        
                const passwordsMatch = await bcrypt.compare(credentials.password, user.hashedPassword!);
                return passwordsMatch ? user : null;
            },
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ],
    callbacks: {
        async session({ session, user }) {
            return { ...session, isAdmin: (user as unknown as User).isAdmin }
        },
        async redirect({ url, baseUrl }) {
            return baseUrl
        },
    },
    session: {
        strategy: 'jwt'
    },
};

export default authOptions;