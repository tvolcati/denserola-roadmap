import { PrismaClient } from "@prisma/client"
import type { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  
  console.log(`[API] Buscando roadmap com ID: ${id}`)

  if (typeof id !== "string" || !/^\d{13}$/.test(id)) {
    console.log(`[API] ID inválido: ${id}`)
    return res.status(400).json({ error: "ID inválido. Deve ser um número de telefone de 13 dígitos." })
  }

  try {
    console.log(`[API] Conectando ao banco para buscar ID: ${id}`)
    const roadmap = await prisma.roadmap.findUnique({
      where: { id: BigInt(id) },
    })

    console.log(`[API] Resultado da busca:`, roadmap ? 'Encontrado' : 'Não encontrado')

    if (!roadmap) {
      // Vamos também buscar todos os roadmaps para debug
      const allRoadmaps = await prisma.roadmap.findMany({
        select: { id: true }
      })
      console.log(`[API] Roadmaps disponíveis:`, allRoadmaps.map(r => r.id.toString()))
      
      return res.status(404).json({ error: "Roadmap não encontrado." })
    }

    // Retorna apenas o conteúdo da coluna 'data', que é o JSON que o front precisa
    res.status(200).json(roadmap.data)
  } catch (error) {
    console.error("Erro ao buscar roadmap:", error)
    res.status(500).json({ error: "Erro ao buscar o roadmap." })
  }
}
