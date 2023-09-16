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
    }
  })
  return entry
}


const EntryPage = async ({ params }) => {
  const entry = await getEntry(params.id)
  const analysisData = [
    { name: 'Subject', value: ''},
    { name: 'Color', value: ''},
    { name: 'Mood', value: ''},
    { name: 'Negative', value: 'false'},
  ]
  return (
    <div className="h-full w-full grid grid-cols-3">
      <div className="col-span-2">
        <Editor entry={entry}/>
      </div>
      <div className="border-1 border-black/10">
        <div className="bg-blue-300 px-6 py10">
          <h2>Anaysis</h2>
        </div>
          <div>
            <ul>
              {analysisData.map(item => (
                <li key={item.name} className="flex items-center justify-between">
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default EntryPage