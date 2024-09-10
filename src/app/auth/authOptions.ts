import { NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { User } from '@prisma/client';

import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from 'next-auth/providers/github';

import _ from 'lodash';
import axios from 'axios';
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
                if (!passwordsMatch) return null;

                await prisma.user.update({
                    where: { email: credentials.email },
                    data: { lastLogin: new Date() }
                });
        
                return user;
            },
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
    ],
    callbacks: {
        async session({ session, token }) {
            try {
                const result = await axios.get<User>('http://localhost:4000/api/users/' + token.sub);
                session.user = _.omit(result.data, ['hashedPassword']);
            } catch(error) {
                session.user.id = token.sub!;
            } finally {
                return session;
            }
        },
    },
    session: {
        strategy: 'jwt'
    },
};

export default authOptions;