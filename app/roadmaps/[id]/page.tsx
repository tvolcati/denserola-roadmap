import { notFound } from "next/navigation"
import RoadmapTimeline from "../../../components/RoadmapTimeline"

interface MonthData {
  value_to_be_saved: number
  explanation: string
}

interface RoadmapData {
  months: Record<string, MonthData>
  user_id: number
  timestamp: string
}

interface RoadmapPageProps {
  params: {
    id: string
  }
}

async function getRoadmapData(id: string) {
  // Validar se o ID é um número de telefone válido de 13 dígitos
  if (!/^\d{13}$/.test(id)) {
    return null
  }

  try {
    // Usar URL absoluta para a API
    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : process.env.NEXTAUTH_URL || 'http://localhost:3000'
    
    const response = await fetch(`${baseUrl}/api/roadmaps/${id}`, {
      cache: 'no-store' // Para sempre buscar dados atualizados
    })
    
    if (!response.ok) {
      console.error(`Erro na API: ${response.status} ${response.statusText}`)
      return null
    }
    
    const data = await response.json()
    
    return {
      data: data as RoadmapData
    }
  } catch (error) {
    console.error("Erro ao buscar roadmap:", error)
    return null
  }
}

export default async function RoadmapPage({ params }: RoadmapPageProps) {
  const roadmap = await getRoadmapData(params.id)
  
  if (!roadmap) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-denserola-bg">
      <div className="container mx-auto px-4 py-6 max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-denserola-dark mb-2">Seu Roadmap Financeiro</h1>
          <p className="text-denserola-dark/70 text-sm">Seu plano personalizado para sair das dívidas</p>
          <div className="mt-2">
            <span className="inline-block bg-denserola-orange/10 text-denserola-orange text-xs px-3 py-1 rounded-full">
              Roadmap #{params.id}
            </span>
          </div>
        </div>

        {/* Timeline */}
        <RoadmapTimeline roadmapData={roadmap.data} />

        {/* Footer motivacional */}
        <div className="mt-8 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-denserola-orange/10">
            <h3 className="font-semibold text-denserola-dark mb-2">🚀 Você consegue!</h3>
            <p className="text-sm text-denserola-dark/70">
              Cada mês que você seguir esse plano, você estará mais perto da sua liberdade financeira.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
