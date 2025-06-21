const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

// Dados realistas para diferentes perfis de usuários
const roadmapsData = [
  {
    // Roadmap 1: Pessoa endividada focando em quitar dívidas
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
    // Roadmap 2: Pessoa querendo juntar para uma moto
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
    // Roadmap 3: Estudante juntando para curso técnico
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
  {
    // Roadmap 4: Casal planejando casamento
    id: BigInt("5541777888999"),
    data: {
      months: {
        "Julho/25": {
          value_to_be_saved: 600,
          explanation: "Primeiro mês da nossa meta de casamento! Eu e minha noiva decidimos juntar R$ 600 cada um. O sonho tá tomando forma!",
        },
        "Agosto/25": {
          value_to_be_saved: 650,
          explanation: "Conseguimos economizar mais esse mês! Cortamos delivery e cozinhamos mais em casa. Cada real economizado é pro nosso grande dia.",
        },
        "Setembro/25": {
          value_to_be_saved: 600,
          explanation: "Voltamos pro planejado. Já começamos a pesquisar buffets e achamos uns preços legais. A ansiedade tá grande!",
        },
        "Outubro/25": {
          value_to_be_saved: 700,
          explanation: "Mês de aniversário da minha noiva e a família ajudou com uma graninha! Vamos usar tudo pro casamento. Que alegria!",
        },
        "Novembro/25": {
          value_to_be_saved: 650,
          explanation: "Já temos quase metade do valor total! Começamos a fechar os fornecedores. O casamento vai ser lindo e dentro do orçamento!",
        },
        "Dezembro/25": {
          value_to_be_saved: 800,
          explanation: "13º salário veio na hora certa! Com esse valor, conseguimos fechar tudo. Casamento marcado pra março de 2026!",
        },
      },
      timestamp: new Date().toISOString(),
    },
  },
  {
    // Roadmap 5: Pessoa querendo fazer uma viagem
    id: BigInt("5551666777888"),
    data: {
      months: {
        "Julho/25": {
          value_to_be_saved: 200,
          explanation: "Sonho antigo: conhecer o Nordeste! Comecei a juntar grana pro meu mochilão. Bahia, Pernambuco, Ceará... lá vou eu!",
        },
        "Agosto/25": {
          value_to_be_saved: 250,
          explanation: "Já tô pesquisando passagens e pousadas! A animação tá grande. Cada real guardado me deixa mais perto das praias paradisíacas.",
        },
        "Setembro/25": {
          value_to_be_saved: 220,
          explanation: "Mês mais difícil, mas não desisti! Cortei alguns gastos supérfluos. O nordeste me espera e eu vou chegar lá!",
        },
        "Outubro/25": {
          value_to_be_saved: 280,
          explanation: "Consegui uma grana extra vendendo umas coisas que não uso mais! Já comprei a passagem. Agora é juntar pro resto da trip!",
        },
        "Novembro/25": {
          value_to_be_saved: 300,
          explanation: "Reta final! Com essa grana já consigo bancar hospedagem e alimentação. Dezembro vai ser meu mês de aventura!",
        },
      },
      timestamp: new Date().toISOString(),
    },
  },
  {
    // Roadmap 6: Empreendedor juntando para abrir negócio
    id: BigInt("5561555666777"),
    data: {
      months: {
        "Julho/25": {
          value_to_be_saved: 800,
          explanation: "Primeiro passo pro meu próprio negócio! Quero abrir uma lanchonete no bairro. Tô estudando o mercado e juntando a grana inicial.",
        },
        "Agosto/25": {
          value_to_be_saved: 750,
          explanation: "Esse mês foi mais apertado, mas mantive o foco. Já encontrei o ponto comercial perfeito. Agora é correr atrás do capital!",
        },
        "Setembro/25": {
          value_to_be_saved: 900,
          explanation: "Consegui um extra com consultoria! A lanchonete tá cada vez mais real. Já tenho até o nome: 'Sabor da Casa'!",
        },
        "Outubro/25": {
          value_to_be_saved: 850,
          explanation: "Fiz um curso de empreendedorismo e aprendi muito! Cada real guardado me deixa mais perto de ser meu próprio chefe.",
        },
        "Novembro/25": {
          value_to_be_saved: 1000,
          explanation: "Black Friday foi boa pra mim! Vendi muito online e consegui guardar uma graninha extra. O sonho tá virando realidade!",
        },
        "Dezembro/25": {
          value_to_be_saved: 1200,
          explanation: "Fechando o ano em grande! Com o 13º e as vendas de fim de ano, consegui muito mais que esperava. 2026 será o ano da minha lanchonete!",
        },
      },
      timestamp: new Date().toISOString(),
    },
  },
  {
    // Roadmap 7: Aposentado planejando reforma da casa
    id: BigInt("5571444555666"),
    data: {
      months: {
        "Julho/25": {
          value_to_be_saved: 400,
          explanation: "Depois de 30 anos trabalhando, chegou a hora de reformar a casa! Vou começar pela cozinha, que tá precisando muito.",
        },
        "Agosto/25": {
          value_to_be_saved: 450,
          explanation: "Consegui uma grana extra com a venda de uns móveis antigos. Cada centavo conta pra deixar a casa do jeito que sempre sonhei.",
        },
        "Setembro/25": {
          value_to_be_saved: 400,
          explanation: "Já comecei a pesquisar materiais e pedreiros. Com essa economia constante, vou conseguir fazer tudo com qualidade.",
        },
        "Outubro/25": {
          value_to_be_saved: 500,
          explanation: "Recebi uma herança pequena da tia Maria. Vou usar tudo na reforma! A casa vai ficar linda pros netos brincarem.",
        },
        "Novembro/25": {
          value_to_be_saved: 450,
          explanation: "Quase lá! Já fechei com o pedreiro pra começar em janeiro. Vai ser bom demais ver a casa ganhando vida nova!",
        },
      },
      timestamp: new Date().toISOString(),
    },
  },
  {
    // Roadmap 8: Jovem juntando para intercâmbio
    id: BigInt("5581333444555"),
    data: {
      months: {
        "Julho/25": {
          value_to_be_saved: 350,
          explanation: "Meu sonho é fazer intercâmbio no Canadá! Comecei a trabalhar meio período e guardar cada centavo. O inglês fluente me espera!",
        },
        "Agosto/25": {
          value_to_be_saved: 400,
          explanation: "Consegui mais umas aulas particulares de inglês pra dar! A grana tá entrando e ainda pratico o idioma. Matando dois coelhos!",
        },
        "Setembro/25": {
          value_to_be_saved: 380,
          explanation: "Esse mês teve uns gastos com material de inglês, mas valeu a pena. Tô evoluindo muito e a grana tá rendendo!",
        },
        "Outubro/25": {
          value_to_be_saved: 420,
          explanation: "Pais me deram uma ajuda especial esse mês! Eles também acreditam no meu sonho. Toronto, aqui vou eu!",
        },
        "Novembro/25": {
          value_to_be_saved: 450,
          explanation: "Já comecei o processo da aplicação pras escolas! Com mais esse valor, consigo pagar todas as taxas necessárias.",
        },
        "Dezembro/25": {
          value_to_be_saved: 500,
          explanation: "Último mês de 2025 e tô muito perto da meta! O intercâmbio tá marcado pra agosto de 2026. Mal posso esperar!",
        },
      },
      timestamp: new Date().toISOString(),
    },
  },
]

async function main() {
  console.log(`🚀 Iniciando seed do banco de dados...`)
  
  // Limpar dados existentes
  console.log(`🧹 Limpando dados existentes...`)
  await prisma.roadmap.deleteMany({})
  
  console.log(`📊 Criando ${roadmapsData.length} roadmaps realistas...`)
  
  for (let i = 0; i < roadmapsData.length; i++) {
    const roadmapData = roadmapsData[i]
    
    const roadmap = await prisma.roadmap.create({
      data: {
        id: roadmapData.id,
        data: roadmapData.data,
      },
    })
    
    const phoneNumber = roadmapData.id.toString()
    const monthsCount = Object.keys(roadmapData.data.months).length
    const totalValue = Object.values(roadmapData.data.months).reduce(
      (sum, month) => sum + month.value_to_be_saved, 
      0
    )
    
    console.log(`✅ Roadmap ${i + 1} criado:`)
    console.log(`   ID (Telefone): ${phoneNumber}`)
    console.log(`   Meses: ${monthsCount}`)
    console.log(`   Total a economizar: R$ ${totalValue}`)
    console.log(`   ---`)
  }
  
  console.log(`🎉 Seed concluído! ${roadmapsData.length} roadmaps criados com sucesso!`)
  console.log(`💡 Para testar, acesse: /roadmaps/[TELEFONE] onde TELEFONE é um dos números exibidos acima`)
  console.log(`📱 Exemplos: /roadmaps/5511999887766, /roadmaps/5521987654321, etc.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
