import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { handlers } from "@/auth"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
});


export const { GET, POST } = handlers