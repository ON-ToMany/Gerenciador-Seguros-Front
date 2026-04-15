import type { ReactNode } from 'react';


export default function CardApolice({icone,titulo,descricao}:{icone:ReactNode ,descricao:string,titulo:string}) {
  
  return (
   <div className="p-4 w-68  "> 
      
 
      <div className="  bg-white border border-white  shadow-2xl rounded-lg p-4 w-full max-w-md">
        
        <div className="flex items-center gap-4 mb-2">
    
          <div className =" h-12 w-12 rounded-full flex-shrink-0" >
       {icone}

          </div>
          
        
          <h1 className="text-cyan-700 text-xl font-bold">{titulo}</h1>
        </div>

        <p className= "text-[#103543] ">
          {descricao}
        </p>

      </div>
    </div>
  )
}
