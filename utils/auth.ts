import { prisma } from './db'
import { auth } from '@clerk/nextjs'

export const getUserFromClerkID = async () => {
  const { userId } = auth()
  console.log({userId})
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId,
    },
  })
  return user
}
