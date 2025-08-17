import FeatCards from "@/components/featCards";
import "./feature.css"

export default function FeaturesSection() {
  return (
    <section id="feature" className="features">
      <div className="featContainer">
                <h2>Por que Escolher a Ambar?</h2>
                <div className="features-grid">
                    <FeatCards 
                        backImg="/img/DesempenhoAmbar.svg"
                        featTitle="Alto desempenho "
                        featText="Compilador, oferecendo performance comparável a linguagens de 
                        baixo nível, mas com a produtividade de linguagens modernas. 
                        O melhor dos dois mundos."
                    />
                    <FeatCards 
                        backImg="/img/EcológicoAmbar.svg"
                        featTitle="Consciência Ecológica"
                        featText="Projeto open-source desenvolvido por estudantes brasileiros, 
                            alinhado com as demandas climáticas globais."
                    />
                    <FeatCards 
                        backImg="/img/GlobalAmbar.svg"
                        featTitle="Impacto Global"
                        featText="Otimizações energéticas integradas. Cada linha de código é 
                            analisada para maximizar eficiência e minimizar impacto ambiental."
                    />
                    <FeatCards 
                        backImg="/img/DesempenhoAmbar.svg"
                        featTitle="Sustentabilidade Digital"
                        featText="Compilador, oferecendo performance comparável a linguagens de 
                        baixo nível, mas com a produtividade de linguagens modernas. 
                        O melhor dos dois mundos."
                    />
                </div>
            </div>
    </section>
  );
}