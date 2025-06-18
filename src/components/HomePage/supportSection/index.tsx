import "./Support.css";
import {
  faBrain,
  faEarth,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import SupportCard from "@/components/supportCard";

export function SupportSection() {
  return (
    <div id="suporte" className="supportContainer">
      <div className="titleSection">
        <h1>Nosso Suporte</h1>
        <p>
          Nosso time esta aqui pra ajudar, Junte se a nossa comunidade, porocure
          na nossa documentação ou simplesmente nos diga o que voce precisa
        </p>
      </div>
      <div className="supportSection">
        <div className="leftColumn">
          <div className="backBlock"></div>
          <div className="backBlock"></div>
          <div className="backBlock"></div>
        </div>

        <div className="centerColumn">
          <div className="backBlock"></div>
          <div className="backBlock"></div>
          <div className="backBlock"></div>

  
            <SupportCard
              icone={faBrain}
              title="EXPERIMENTE A LINGUAGEM AMBAR.CODE"
              text="Domine uma linguagem criada para ensinar de forma 
              intuitiva e com foco em sustentabilidade. Com sintaxe clara, 
              tipagem estática e feedback em tempo real sobre eficiência, 
              você programa com consciência ecológica desde o primeiro dia.
              Perfeita para estudantes, entusiastas e profissionais que querem unir tecnologia e responsabilidade ambiental."
            />

            <SupportCard
              icone={faGear}
              title="ENTENDA COMO FUNCIONA O COMPILADOR"
              text="compilador que traduz sua lógica em código altamente 
              otimizado. Ele analisa, transforma e melhora seu programa usando 
              IA e heurísticas energéticas, identificando trechos ineficientes 
              e reescrevendo-os de forma mais leve.
              Tudo isso com base na infraestrutura LLVM e otimizações como 
              eliminação de código morto, inlining e loop fusion."
            />

            <SupportCard 
              icone={faEarth}
              title={"PROGRAME PENSANDO NO FUTURO"}
              text="Cada linha de código escrita em Ambar.Code representa 
              menos emissões de CO₂. Com a proposta de redução de até 15% no 
              consumo energético, o projeto contribui diretamente com os Objetivos 
              do Desenvolvimento Sustentável (ODS).
              Seja parte da mudança: programe com impacto positivo no planeta 
              e nas futuras gerações."
            />
           
          <div className="backBlock"></div>
          <div className="backBlock"></div>
          <div className="backBlock"></div>
        </div>

        <div className="rightColumn">
          <div className="backBlock"></div>
          <div className="backBlock"></div>
          <div className="backBlock"></div>
        </div>
      </div>
    </div>
  );
}
