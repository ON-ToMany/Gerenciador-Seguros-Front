import React from 'react'

export default function TabelaHome() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-#FFFFFF66 font-sans">
  <h2 className="text-2xl font-bold text-cyan-700 mb-6">Conheça nossos planos</h2>

  <div className="overflow-x-auto">
    <table className="w-full min-w-[700px] border-collapse">
      
      <thead>
        <tr className="border-b-2 border-cyan-800 text-cyan-900">
          <th className="py-3 px-2 text-left font-bold w-1/4">Caracteristicas</th>
          <th className="py-3 px-2 text-center font-bold w-1/4">Plano Velocity</th>
          <th className="py-3 px-2 text-center font-bold w-1/4">Plano Infinity</th>
          <th className="py-3 px-2 text-center font-bold w-1/4">Plano Guardian</th>
        </tr>
      </thead>

      <tbody className="text-cyan-900 font-semibold text-sm md:text-base">
        
        <tr className="border-b border-gray-300">
          <td className="py-4 px-2 text-left">Roubo e Furto</td>
          <td className="py-4 px-2 text-center">
            <span className="inline-block px-4 py-1 bg-cyan-100 border border-cyan-300 text-cyan-600 rounded-full">Sim</span>
          </td>
          <td className="py-4 px-2 text-center">
            <span className="inline-block px-4 py-1 bg-cyan-100 border border-cyan-300 text-cyan-600 rounded-full">Sim</span>
          </td>
          <td className="py-4 px-2 text-center">
            <span className="inline-block px-4 py-1 bg-cyan-100 border border-cyan-300 text-cyan-600 rounded-full">Sim</span>
          </td>
        </tr>

        <tr className="border-b border-gray-300">
          <td className="py-4 px-2 text-left">Danos Acidentais</td>
          <td className="py-4 px-2 text-center">
            <span className="inline-block px-4 py-1 bg-cyan-100 border border-cyan-300 text-cyan-600 rounded-full">Não</span>
          </td>
          <td className="py-4 px-2 text-center">
            <span className="inline-block px-4 py-1 bg-cyan-100 border border-cyan-300 text-cyan-600 rounded-full">Sim</span>
          </td>
          <td className="py-4 px-2 text-center">
            <span className="inline-block px-4 py-1 bg-cyan-100 border border-cyan-300 text-cyan-600 rounded-full">Sim</span>
          </td>
        </tr>

        <tr className="border-b border-gray-300">
          <td className="py-4 px-2 text-left">Assistencia 24hs</td>
          <td className="py-4 px-2 text-center">
            <span className="inline-block px-4 py-1 bg-cyan-100 border border-cyan-300 text-cyan-600 rounded-full">Básica</span>
          </td>
          <td className="py-4 px-2 text-center">
            <span className="inline-block px-4 py-1 bg-cyan-100 border border-cyan-300 text-cyan-600 rounded-full">Completa</span>
          </td>
          <td className="py-4 px-2 text-center">
            <span className="inline-block px-4 py-1 bg-cyan-100 border border-cyan-300 text-cyan-600 rounded-full">VIP</span>
          </td>
        </tr>

        <tr className="border-b border-gray-300">
          <td className="py-4 px-2 text-left">Rastreador GPS</td>
          <td className="py-4 px-2 text-center">
            <span className="inline-block px-4 py-1 bg-cyan-100 border border-cyan-300 text-cyan-600 rounded-full">Não</span>
          </td>
          <td className="py-4 px-2 text-center">
            <span className="inline-block px-4 py-1 bg-cyan-100 border border-cyan-300 text-cyan-600 rounded-full">Não</span>
          </td>
          <td className="py-4 px-2 text-center">
            <span className="inline-block px-4 py-1 bg-cyan-100 border border-cyan-300 text-cyan-600 rounded-full">Incluso</span>
          </td>
        </tr>

        <tr className="border-b border-gray-300">
          <td className="py-4 px-2 text-left">App de Monitoramento</td>
          <td className="py-4 px-2 text-center">
            <span className="inline-block px-4 py-1 bg-cyan-100 border border-cyan-300 text-cyan-600 rounded-full">Não</span>
          </td>
          <td className="py-4 px-2 text-center">
            <span className="inline-block px-4 py-1 bg-cyan-100 border border-cyan-300 text-cyan-600 rounded-full">Não</span>
          </td>
          <td className="py-4 px-2 text-center">
            <span className="inline-block px-4 py-1 bg-cyan-100 border border-cyan-300 text-cyan-600 rounded-full">Incluso</span>
          </td>
        </tr>

        <tr className="border-b border-gray-300">
          <td className="py-4 px-2 text-left">Investimento <span className="text-xs font-normal">(mensal)</span></td>
          <td className="py-4 px-2 text-center">
            <span className="inline-block px-4 py-1 bg-cyan-100 border border-cyan-300 text-cyan-600 rounded-full">R$ 69,90</span>
          </td>
          <td className="py-4 px-2 text-center">
            <span className="inline-block px-4 py-1 bg-cyan-100 border border-cyan-300 text-cyan-600 rounded-full">R$ 99,90</span>
          </td>
          <td className="py-4 px-2 text-center">
            <span className="inline-block px-4 py-1 bg-cyan-100 border border-cyan-300 text-cyan-600 rounded-full">R$ 169,90</span>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</div>


  )
}
