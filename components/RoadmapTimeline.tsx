import MonthCard from "./MonthCard"
import AdCard from "./AdCard"

interface MonthData {
  value_to_be_saved: number
  explanation: string
}

interface RoadmapData {
  months: Record<string, MonthData>
  user_id: number
  timestamp: string
}

interface RoadmapTimelineProps {
  roadmapData: RoadmapData
}

export default function RoadmapTimeline({ roadmapData }: RoadmapTimelineProps) {
  const monthEntries = Object.entries(roadmapData.months)

  return (
    <div className="relative">
      {/* Linha vertical da timeline */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-denserola-orange/30"></div>

      <div className="space-y-6">
        {monthEntries.map(([month, data], index) => (
          <div key={month}>
            <MonthCard
              month={month}
              valueToSave={data.value_to_be_saved}
              explanation={data.explanation}
              isFirst={index === 0}
              isLast={index === monthEntries.length - 1}
            />

            {/* Inserir publicidade entre o 2º e 3º mês (após Agosto/25) */}
            {index === 1 && <AdCard />}
          </div>
        ))}
      </div>
    </div>
  )
}
