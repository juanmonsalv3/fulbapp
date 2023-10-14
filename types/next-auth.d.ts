import NextAuth, { Session as AuthSession } from 'next-auth';

declare module 'next-auth' {
  interface Session extends AuthSession {
    user: AuthSession['user'] & {
      admin: boolean;
    };
  }
}
