import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "@auth/core/jwt";
import NextAuth, { type DefaultSession, type Session } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            address?: string;
            id: string;
        } & DefaultSession["user"];
    }

    interface JWT {
        id?: string;
    }
}

export const { handlers, auth } = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const adminUsername = process.env.ADMIN_USERNAME;
                const adminPassword = process.env.ADMIN_PASSWORD;

                if (
                    credentials?.username === adminUsername &&
                    credentials?.password === adminPassword
                ) {
                    return { id: "1", name: "Admin" };
                }
                return null;
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }: { session: Session; token: JWT }) {
            if (token.id && typeof token.id === "string") {
                session.user.id = token.id;
            }
            return session;
        },
    },
});
