import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user'
    }),
  ],
})

// FaunaDB -HTTP
// DynamoDB - AWS
// PostgreSQL, MongoDB

// 24h (1 forbindelse)
// 1000 godkjenning