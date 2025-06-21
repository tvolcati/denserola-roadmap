interface MonthCardProps {
  month: string
  valueToSave: number
  explanation: string
  isFirst: boolean
  isLast: boolean
}

export default function MonthCard({ month, valueToSave, explanation, isFirst, isLast }: MonthCardProps) {
  return (
    <div className="relative pl-16">
      {/* Círculo na timeline */}
      <div className="absolute left-4 top-4 w-4 h-4 bg-denserola-orange rounded-full border-4 border-denserola-bg shadow-sm"></div>

      {/* Card do mês */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-denserola-orange/10 hover:shadow-md transition-shadow">
        {/* Header do card */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold text-denserola-dark text-lg">{month}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-2xl font-bold text-denserola-orange">R$ {valueToSave}</span>
              <span className="text-sm text-denserola-dark/60">para guardar</span>
            </div>
          </div>

          {/* Ícone indicativo */}
          <div className="w-10 h-10 bg-denserola-orange/10 rounded-full flex items-center justify-center">
            {isFirst && <span className="text-denserola-orange text-lg">🎯</span>}
            {isLast && <span className="text-denserola-orange text-lg">🎉</span>}
            {!isFirst && !isLast && <span className="text-denserola-orange text-lg">💪</span>}
          </div>
        </div>

        {/* Explicação */}
        <div className="bg-denserola-bg/50 rounded-xl p-4">
          <p className="text-denserola-dark/80 text-sm leading-relaxed">{explanation}</p>
        </div>

        {/* Barra de progresso visual */}
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-denserola-dark/60">Meta do mês</span>
            <span className="text-xs font-medium text-denserola-orange">R$ {valueToSave}</span>
          </div>
          <div className="w-full bg-denserola-orange/20 rounded-full h-2">
            <div
              className="bg-denserola-orange h-2 rounded-full transition-all duration-500"
              style={{ width: "0%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
