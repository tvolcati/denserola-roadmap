import { PrismaClient } from "@prisma/client"
import type { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  
  console.log("🔍 [API] ID recebido:", id, "tipo:", typeof id)
  console.log("🔍 [API] ID length:", id?.toString().length)

  if (typeof id !== "string") {
    console.log("❌ [API] ID não é string")
    return res.status(400).json({ error: "ID deve ser uma string." })
  }

  if (!/^\d{13}$/.test(id)) {
    console.log("❌ [API] ID não passa no regex:", id, "length:", id.length)
    return res.status(400).json({ error: "ID inválido. Deve ser um número de telefone de 13 dígitos." })
  }

  console.log("✅ [API] ID válido, convertendo para BigInt")

  try {
    const bigIntId = BigInt(id)
    console.log("🔍 [API] BigInt criado:", bigIntId.toString())
    
    console.log("🔍 [API] Executando query no banco...")
    const roadmap = await prisma.roadmap.findUnique({
      where: { id: bigIntId },
    })

    console.log("🔍 [API] Resultado da query:", roadmap ? "ENCONTRADO" : "NÃO ENCONTRADO")

    if (!roadmap) {
      // Debug: listar todos os IDs do banco
      const allRoadmaps = await prisma.roadmap.findMany({
        select: { id: true }
      })
      const allIds = allRoadmaps.map(r => r.id.toString())
      console.log("🔍 [API] IDs disponíveis no banco:", allIds)
      console.log("🔍 [API] ID buscado:", bigIntId.toString())
      console.log("🔍 [API] ID está na lista?", allIds.includes(bigIntId.toString()))
      
      return res.status(404).json({ 
        error: "Roadmap não encontrado.",
        debug: {
          searchedId: bigIntId.toString(),
          availableIds: allIds
        }
      })
    }

    console.log("✅ [API] Retornando dados do roadmap")
    res.status(200).json(roadmap.data)
  } catch (error) {
    console.error("💥 [API] Erro:", error)
    res.status(500).json({ error: "Erro ao buscar o roadmap." })
  }
}
