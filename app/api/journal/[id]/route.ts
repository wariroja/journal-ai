
import { analyzeEntry } from '@/utils/ai'
import { getUserFromClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { NextResponse } from 'next/server'


export const PATCH = async (request: Request, { params }) => {
  const { content } = await request.json()
  const user = await getUserFromClerkID()
  const updatedEntry = await prisma.journalEntry.update({
    where:{
      userId_id: {
        userId: user.id, 
        id: params.id,
      }
    },
    data: {
      content,
    }
  })

  const analysis = await analyzeEntry(updatedEntry.content)
  const updated = await prisma.analysis.upsert({
    where:{
      entryId: updatedEntry.id,
    },
    create: {
        ...analysis,
        entry: {
            connect: { id: updatedEntry.id }
        },
        user: {
            connect: { id: user.id }  // Again, replace userId with the actual user's id
        }
    },
    update: analysis,
  })

  return NextResponse.json({ data: updatedEntry, analysis: updated })
}