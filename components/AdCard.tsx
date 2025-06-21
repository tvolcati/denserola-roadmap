export default function AdCard() {
  return (
    <div className="relative pl-16 my-8">
      {/* Círculo menor na timeline para o anúncio */}
      <div className="absolute left-5 top-4 w-2 h-2 bg-denserola-orange/50 rounded-full"></div>

      {/* Card de publicidade */}
      <div className="bg-white/80 rounded-2xl p-4 border-2 border-dashed border-denserola-orange/30 hover:border-denserola-orange/50 transition-colors">
        <div className="text-center">
          <div className="w-8 h-8 bg-denserola-orange/10 rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-denserola-orange text-sm">📢</span>
          </div>
          <p className="text-xs text-denserola-dark/60 font-medium">Publicidade</p>
          <p className="text-xs text-denserola-dark/40 mt-1">Espaço reservado para conteúdo patrocinado</p>
        </div>
      </div>
    </div>
  )
}
