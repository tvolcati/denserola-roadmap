import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-denserola-bg">
      <div className="container mx-auto px-4 py-6 max-w-md">
        <div className="text-center mt-20">
          <div className="mb-8">
            <div className="w-24 h-24 bg-denserola-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">😕</span>
            </div>
            <h1 className="text-3xl font-bold text-denserola-dark mb-2">Roadmap não encontrado</h1>
            <p className="text-denserola-dark/70 text-sm">
              O roadmap que você está procurando não existe ou foi removido.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-denserola-orange/10">
            <h3 className="font-semibold text-denserola-dark mb-4">O que você pode fazer:</h3>
            <div className="space-y-3 text-sm text-denserola-dark/70">
              <p>• Verifique se o ID do roadmap está correto</p>
              <p>• Tente acessar um roadmap existente</p>
              <p>• Entre em contato conosco se o problema persistir</p>
            </div>

            <div className="mt-6">
              <Link
                href="/roadmaps/1"
                className="inline-block bg-denserola-orange text-white px-6 py-3 rounded-xl font-medium hover:bg-denserola-orange/90 transition-colors"
              >
                Ver Roadmap de Exemplo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
