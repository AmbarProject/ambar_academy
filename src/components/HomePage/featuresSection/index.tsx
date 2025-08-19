import FeatCards from "@/components/featCards";
import "./feature.css"

export default function FeaturesSection() {
const features = [
  {
    descImg: "Gráfico de desempenho com barras crescentes e seta ascendente",
    backImg: "/img/DesempenhoAmbar.svg",
    featTitle: "Alto desempenho",
    featText:
      "Compilador, oferecendo performance comparável a linguagens de baixo nível, mas com a produtividade de linguagens modernas."
  },
  {
    descImg: "Logo AMBAR.CODE com globo terrestre e conexões globais",
    backImg: "/img/GlobalAmbar.svg",
    featTitle: "Impacto Global",
    featText:
      "Projeto open-source desenvolvido por estudantes brasileiros, alinhado com as demandas climáticas globais."
  },
  {
    descImg: "Símbolo de reciclagem com código de programação ao centro",
    backImg: "/img/EcológicoAmbar.svg",
    featTitle: "Consciência Ecológica",
    featText:
      "Otimizações energéticas integradas. Cada linha de código é analisada para maximizar eficiência e minimizar impacto ambiental."
  },
  {
    descImg: "aprendizado",
    backImg: "/img/AprendizadoAmbar.svg",
    featTitle: "Aprendizado Intuitivo",
    featText:
      "Ambar.Code foi criada para ser acessível desde o primeiro contato. Sua baixa curva de aprendizado permite que iniciantes dominem conceitos rapidamente."
  }
];

  return (
    <section id="feature" className="features">
      <div className="featContainer">
                <h2>Por que Escolher a Ambar?</h2>
                <div className="features-grid">
                    {
                        features.map((item,index) => (
                            <FeatCards key={index}{...item}/>
                        ))
                    }
                </div>
            </div>
    </section>
  );
}