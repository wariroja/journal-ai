import Editor from "@/app/components/Editor"
import { getUserFromClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"

const getEntry = async (id) => {
  const user = await getUserFromClerkID()
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id, 
        id,
      }
    },
    include: { // join for SQL/MySQL
      analysis: true
    }
  })
  return entry
}


const EntryPage = async ({ params }) => {
  const entry = await getEntry(params.id)
  console.log({entry})
  return (
    <div className="h-full w-full">
      <div className="col-span-2">
        <Editor entry={entry}/>
      </div>
    </div>
  )
}

export default EntryPage