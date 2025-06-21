const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function testConnection() {
  try {
    console.log("🔄 Testando conexão com o banco de dados...")

    // Tenta fazer uma query simples
    await prisma.$connect()
    console.log("✅ Conexão com o banco estabelecida com sucesso!")

    // Verifica se a tabela Roadmap existe
    const roadmaps = await prisma.roadmap.findMany()
    console.log(`📊 Encontrados ${roadmaps.length} roadmaps no banco de dados.`)

    if (roadmaps.length > 0) {
      console.log("📋 Primeiro roadmap:", JSON.stringify(roadmaps[0], null, 2))
    }
  } catch (error) {
    console.error("❌ Erro ao conectar com o banco:", error.message)

    if (error.code === "P1001") {
      console.log("💡 Dica: Verifique se o PostgreSQL está rodando e se as credenciais no .env estão corretas.")
    }
  } finally {
    await prisma.$disconnect()
  }
}

testConnection()
