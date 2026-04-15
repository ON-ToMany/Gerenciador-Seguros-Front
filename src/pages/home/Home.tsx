import Institucional from "../institucional/Institucional"

function Home() {
  return (
    <div>
    <h1 className="text-[1.35rem] font-bold text-[#103543] mb-8   ml-8   ">
        Nossa equipe
      </h1>
  <Institucional foto="src/assets/image 12.png"dsc="Colaborou na ideia e coordenação do projeto, participando ativamente em todas as etapas, código."  nome="Álvaro César" cargo="SCRUM MASTER"/>
   <Institucional foto="src/assets/image 8.png" dsc="Colaborou na ideia e coordenação do projeto, participando ativamente em todas as etapas, código." nome="Breno Nunes" cargo="DEV"/>
    <Institucional foto="src/assets/image 10.png"  dsc="Colaborou na ideia e coordenação do projeto, participando ativamente em todas as etapas, código."   nome="José Rodrigues" cargo="DEV"/>
     <Institucional foto="src/assets/foto.png"  dsc="Colaborou na ideia e coordenação do projeto, participando ativamente em todas as etapas, código." nome="Maria Eduarda Gomes" cargo="DEV"/>
      <Institucional foto="src/assets/image 9.png" dsc="Colaborou na ideia e coordenação do projeto, participando ativamente em todas as etapas, código. " nome="Márcia Telles"   cargo="DEV"/>
       <Institucional foto="src/assets/Foto (1).png"  dsc="Colaborou na ideia e coordenação do projeto, participando ativamente em todas as etapas, código." nome="Mayara Monteiro" cargo="TESTER"/>



    </div>
  
  )
}

export default Home