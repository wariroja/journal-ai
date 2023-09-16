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
  const { mood, summary, color, subject, negative } = entry?.analysis
  const analysisData = [
    { name: 'Summary', value: summary },
    { name: 'Subject', value: subject },
    { name: 'Mood', value: mood },
    { name: 'Negative', value: negative ? "True" : "False" },
  ]
  return (
    <div className="h-full w-full grid grid-cols-3">
      <div className="col-span-2">
        <Editor entry={entry}/>
      </div>
      <div className="border-1 border-black/10">
        <div className="px-6 py10" style={{backgroundColor: color}} >
          <h2>Anaysis</h2>
        </div>
          <div>
            <ul>
              {analysisData.map(item => (
                <li key={item.name} className="flex items-center justify-between">
                  <span>{item.name}</span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default EntryPage