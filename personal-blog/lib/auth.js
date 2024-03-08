import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from './prisma';
import { compare } from 'bcrypt';

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/sign-in',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'john@mail.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null;
          }
          const existingUser = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });
          if (!existingUser) {
            return null;
          }

          if (existingUser.password) {
            const passwordMatch = await compare(
              credentials.password,
              existingUser.password
            );
            if (!passwordMatch) {
              return null;
            }
          }

          return {
            id: existingUser.id,
            username: existingUser.username,
            email: existingUser.email,
          };
        } catch (error) {
          console.error(error);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        return {
          ...token,
          username: user.username,
        };
      }
      return token;
    },
    async session({ session, token }) {
      const username = await prisma.user.findUnique({
        where: {
          id: token.sub,
        },
      });
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
          username: username.username,
        },
      };
      return token;
    },
  },
};
