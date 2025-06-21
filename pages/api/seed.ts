import { PrismaClient } from "@prisma/client"
import type { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

// Dados do seed (copiado do seed.ts)
const roadmapsData = [
  {
    id: BigInt("5511999887766"),
    data: {
      months: {
        "Julho/25": {
          value_to_be_saved: 300,
          explanation: "O foco total é esse, mano. Guarda essa grana pra gente chegar com o pé na porta no Feirão do Serasa no próximo mês e limpar essa pendência do CPF.",
        },
        "Agosto/25": {
          value_to_be_saved: 250,
          explanation: "Boa! A do Serasa já foi. Agora a meta é juntar pra renegociar aquela dívida do cartão de crédito. Menos juros, mais tranquilidade.",
        },
        "Setembro/25": {
          value_to_be_saved: 250,
          explanation: "Seguimos no plano! Mais uma parte pra quitar o cartão. A gente tá cada vez mais perto de zerar essa parada.",
        },
        "Outubro/25": {
          value_to_be_saved: 400,
          explanation: "Agora é hora de guardar pro carnê da casa própria. Com as dívidas quitadas, sobra mais grana pra investir no futuro!",
        },
        "Novembro/25": {
          value_to_be_saved: 400,
          explanation: "Mantendo o ritmo! Essa grana vai direto pro financiamento. Cada real conta pra realizar o sonho da casa própria.",
        },
        "Dezembro/25": {
          value_to_be_saved: 500,
          explanation: "Fechando o ano com chave de ouro! 13º salário ajuda a dar uma turbinada na poupança. 2026 vai ser nosso ano!",
        },
      },
      timestamp: new Date().toISOString(),
    },
  },
  {
    id: BigInt("5521987654321"),
    data: {
      months: {
        "Julho/25": {
          value_to_be_saved: 150,
          explanation: "Começando devagar, mas com foco! Essa grana vai direto pra poupança da moto. Tô de olho numa Honda CG 160.",
        },
        "Agosto/25": {
          value_to_be_saved: 200,
          explanation: "Consegui uma grana extra com um freelance! Vamos acelerar essa meta. A moto tá ficando cada dia mais próxima.",
        },
        "Setembro/25": {
          value_to_be_saved: 180,
          explanation: "Esse mês foi mais apertado, mas não desanimei. Toda economia conta! Logo vou estar andando na minha própria moto.",
        },
        "Outubro/25": {
          value_to_be_saved: 220,
          explanation: "Cortei algumas saídas e consegui guardar mais! A disciplina tá compensando. Já consigo ver eu pilotando por aí.",
        },
        "Novembro/25": {
          value_to_be_saved: 250,
          explanation: "Quase lá! Com mais esse valor, já tenho quase tudo pra entrada da moto. Mês que vem vou negociar com o vendedor!",
        },
      },
      timestamp: new Date().toISOString(),
    },
  },
  {
    id: BigInt("5531888777999"),
    data: {
      months: {
        "Julho/25": {
          value_to_be_saved: 80,
          explanation: "Tô ralando no estágio, mas cada real conta! Esse curso de TI vai mudar minha vida. Vou conseguir!",
        },
        "Agosto/25": {
          value_to_be_saved: 100,
          explanation: "Consegui umas horas extras! A grana tá entrando e eu tô cada vez mais perto do meu objetivo. Foco total!",
        },
        "Setembro/25": {
          value_to_be_saved: 90,
          explanation: "Esse mês rolou uns gastos extras, mas mantive o foco. O curso começa em outubro, então é agora ou nunca!",
        },
        "Outubro/25": {
          value_to_be_saved: 120,
          explanation: "Último mês de economia! Com essa grana consigo pagar o curso à vista e ainda pegar desconto. Valeu a pena cada sacrifício!",
        },
      },
      timestamp: new Date().toISOString(),
    },
  },
]

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  // Só permite POST para executar o seed
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido. Use POST.' })
  }

  try {
    console.log('[SEED] Iniciando seed do banco de dados...')
    
    // Limpar dados existentes
    console.log('[SEED] Limpando dados existentes...')
    await prisma.roadmap.deleteMany({})
    
    console.log(`[SEED] Criando ${roadmapsData.length} roadmaps...`)
    
    const createdRoadmaps = []
    
    for (let i = 0; i < roadmapsData.length; i++) {
      const roadmapData = roadmapsData[i]
      
      const roadmap = await prisma.roadmap.create({
        data: {
          id: roadmapData.id,
          data: roadmapData.data,
        },
      })
      
      createdRoadmaps.push({
        id: roadmap.id.toString(),
        monthsCount: Object.keys(roadmapData.data.months).length
      })
      
      console.log(`[SEED] Roadmap ${i + 1} criado: ${roadmap.id.toString()}`)
    }
    
    res.status(200).json({
      success: true,
      message: `${roadmapsData.length} roadmaps criados com sucesso!`,
      roadmaps: createdRoadmaps
    })
  } catch (error) {
    console.error('[SEED] Erro ao executar seed:', error)
    res.status(500).json({ 
      error: 'Erro ao executar seed',
      details: error instanceof Error ? error.message : String(error)
    })
  }
}
