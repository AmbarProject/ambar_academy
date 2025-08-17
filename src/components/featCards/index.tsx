import "./featCard.css";

type featCardsProps = {
    backImg: string;
    featTitle: string;
    featText: string;
}

export default function FeatCards({ backImg,featTitle, featText }: featCardsProps) {
  return (
    <div className="features-grid">
      <div className="feature-card">
        <div className="feature-img" style={{ backgroundImage: `url(${backImg})` }}></div>
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
