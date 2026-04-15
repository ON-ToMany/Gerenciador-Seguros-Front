
import CardApolice from "../../components/cardApolice/CardApolice"
import Institucional from "../institucional/Institucional"
import {RiSecurePaymentLine,RiGlobalLine} from 'react-icons/ri'
import { Ri24HoursLine } from "react-icons/ri"; 


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

<div>
  
    <h1 className= "text-cyan-700 font-bold text-2xl  ml-5" >Por que escolher a IonGuard ?</h1>

    
  <div className="flex">
<CardApolice icone={<RiSecurePaymentLine className="text-cyan-700 text-4xl mb-2 " />}titulo="Feito para E-Bikes" descricao="Proteção total para sua bike elétrica, não importa aonde você vá."/>
   <CardApolice icone ={<Ri24HoursLine className="text-cyan-700 text-4xl mb-2" />}titulo='Assistência Completa 24h' descricao="Teve um imprevisto? Relaxa, estamos aqui para te socorrer a qualquer momento."/>
   <CardApolice icone ={<RiGlobalLine  className="text-cyan-700 text-4xl mb-2" />} titulo="Rastreabilidade" descricao="Aumente drasticamente as chances de recuperar sua bike roubada, com rastreador incluso."/>
   

  </div>
</div>

   
    </div>
  
  )
}

export default Home