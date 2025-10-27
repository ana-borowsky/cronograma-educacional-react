import React from 'react';
import { cn } from "@/lib/utils"; // Assume-se que você tem a função cn do shadcn/ui

// Mapeamento de cor da borda para a cor de fundo do círculo
const colorMap = {
  yellow: "bg-yellow-600",
  red: "bg-red-600",
  green: "bg-green-600",
  blue: "bg-blue-600",
  // Adicione mais cores conforme necessário
};

/**
 * Componente de título para uma disciplina ou categoria.
 * Exibe um círculo colorido e o nome da disciplina.
 * * @param {object} props
 * @param {string} props.title - O nome da disciplina (Ex: "Cálculo I").
 * @param {('yellow' | 'red' | 'green' | 'blue' | string)} props.color - A cor do indicador (círculo).
 */
export function DisciplineTitle({ title, color }) {

  // Encontra a classe de cor ou usa uma classe padrão (fallback)
  const colorClass = colorMap[color] || "bg-neutral-500";

  return (
    <h2 className="flex items-center text-xl font-bold text-white mb-4 border-b border-neutral-700 pb-2 truncate">

      {/* Indicador de cor (o círculo) */}
      <span className={cn(
        "w-3 h-3 rounded-full mr-3 flex-shrink-0",
        colorClass
      )}></span>

      {/* Título da Disciplina */}
      {title}
    </h2>
  );
}