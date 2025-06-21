"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    // Redireciona automaticamente para o roadmap de exemplo
    router.push("/roadmaps/1")
  }, [router])

  return (
    <div className="min-h-screen bg-denserola-bg">
      <div className="container mx-auto px-4 py-6 max-w-md">
        <div className="text-center mt-20">
          <div className="w-16 h-16 bg-denserola-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <span className="text-2xl">🚀</span>
          </div>
          <h1 className="text-2xl font-bold text-denserola-dark mb-2">Carregando seu roadmap...</h1>
          <p className="text-denserola-dark/70 text-sm">Redirecionando para seu plano financeiro</p>
        </div>
      </div>
    </div>
  )
}