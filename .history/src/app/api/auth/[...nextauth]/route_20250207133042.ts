import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";




const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID!,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    // }),
    // TwitterProvider({
    //   clientId: process.env.TWITTER_CLIENT_ID!,
    //   clientSecret: process.env.TWITTER_CLIENT_SECRET!,
    //   version: "2.0",
    // }),
  ],
//   adapter: SupabaseAdapter({
    // url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    // secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
//   }),
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/src/app/page.tsx",
  },
});

export { handler as GET, handler as POST };

const handler  =NextAuth({
    
})