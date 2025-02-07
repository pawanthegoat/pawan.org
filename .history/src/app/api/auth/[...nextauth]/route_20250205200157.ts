

import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
// import { SupabaseAdapter } from "@next-auth/supabase-adapter";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
//   adapter: SupabaseAdapter({
    // url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    // secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
//   }),
//   secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/src/app/page.tsx', // Ensure this path is correct
  },
});

export { handler as GET, handler as POST };
