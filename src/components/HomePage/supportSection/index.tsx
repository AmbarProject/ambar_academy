import "./Support.css";
import {
  faFileAlt,
  faPhone,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import SupportCard from "@/components/supportCard";

export function SupportSection({id} : {id: string}) {
  return (
    <div id={id} className="supportContainer">
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
              icone={faUsers}
              title="Junte-se à nossa Comunidade"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Possimus dolorum inventore ut libero velit! Quase ex deserunt 
              nostrum, quisquam perspiciatis ea labore impedit consequatur, 
              similique vitae adipisci et fuga odit?"
              link="/"
              btnText="Junte-se agora"
            />

            <SupportCard
              icone={faFileAlt}
              title="Veja nossa documentação"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Possimus dolorum inventore ut libero velit! Quase ex deserunt 
              nostrum, quisquam perspiciatis ea labore impedit consequatur, 
              similique vitae adipisci et fuga odit?"
              link="/"
              btnText="Veja agora"
            />

            <SupportCard 
              icone={faPhone}
              title={"Entre em contato"}
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Possimus dolorum inventore ut libero velit! Quasi ex deserunt
              nostrum, quisquam perspiciatis ea labore impedit consequatur,
              similique vitae adipisci et fuga odit?"
              link={"/"}
              btnText={"Em um click"}
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
