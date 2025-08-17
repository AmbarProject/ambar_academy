import Image from "next/image";
import "./featCard.css";

type featCardsProps = {
    backImg: string;
    featTitle: string;
    featText: string;
    descImg: string;
}

export default function FeatCards({ backImg,featTitle, featText,descImg }: featCardsProps) {
  return (
    <div className="features-grid">
      <div className="feature-card">
        <div className="feature-img" >
          <Image className="featImg" width={100} height={200} alt={`${descImg}`} src={`${backImg}`}></Image>
        </div>
        <div className="feature-text">
          <h3>{featTitle}</h3>
          <p>
            {featText}
          </p>
        </div>
      </div>
    </div>
  );
}
