import { qa } from '@/utils/ai'
import { getUserFromClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'

export const POST = async (request) => {
  console.log(request.json())
  const { question } = await request.json()
  const user = await getUserFromClerkID()
  console.log(user, request)
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user?.id,
    },
    select: {
      id: true, 
      content: true,
      createdAt: true,
    },
  })

  const answer = await qa(question, entries)
  console.log(answer)
  return NextResponse.json({ data: answer })
}