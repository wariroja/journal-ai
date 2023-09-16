import HistoryChart from "@/app/components/HistoryChart"
import { getUserFromClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"



const getData = async () => {
  const user = await getUserFromClerkID()
  const analyses = await prisma.analysis.findMany({
    where: {
      userId: user.id
    },
  })
  const sum = analyses.reduce((all, current) => all + current.sentimentScore, 0)
  const avg = Math.round(sum / analyses.length)
  return { analyses, avg}
}

const History = async () => {
  const { avg, analyses } = await getData()
  return (
    <div className='w-full h-full'>
      <div>{`Ave: ${avg}`}</div>
      <div className= 'w-full h-full'>
        <HistoryChart data={analyses} />
      </div>
    </div>
  )
}

export default History