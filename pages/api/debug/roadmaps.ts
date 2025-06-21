import { PrismaClient } from "@prisma/client"
import type { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log('[DEBUG] Verificando roadmaps no banco...')
    
    const roadmaps = await prisma.roadmap.findMany({
      select: { 
        id: true,
        data: true
      }
    })

    console.log(`[DEBUG] Encontrados ${roadmaps.length} roadmaps`)
    
    const roadmapsInfo = roadmaps.map(r => ({
      id: r.id.toString(),
      hasData: !!r.data,
      monthsCount: r.data && typeof r.data === 'object' && 'months' in r.data 
        ? Object.keys((r.data as any).months || {}).length 
        : 0
    }))

    res.status(200).json({
      count: roadmaps.length,
      roadmaps: roadmapsInfo,
      message: roadmaps.length === 0 ? 'Banco vazio - execute o seed' : 'Roadmaps encontrados'
    })
  } catch (error) {
    console.error('[DEBUG] Erro ao verificar roadmaps:', error)
    res.status(500).json({ 
      error: 'Erro ao verificar roadmaps',
      details: error instanceof Error ? error.message : String(error)
    })
  }
}
