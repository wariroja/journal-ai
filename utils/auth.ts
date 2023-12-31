import { prisma } from './db'
import { auth } from '@clerk/nextjs'

export const getUserFromClerkID = async () => {
  const { userId } = auth()
  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
  })
  return user
}
