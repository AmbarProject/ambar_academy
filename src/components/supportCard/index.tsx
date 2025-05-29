import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import "./supportCard.css";

type SupportCardProps = {
    icone: any;
    title: string;
    text: string;
    link: string;
    btnText: string;
}



export default function SupportCard({ icone, title, text, link, btnText }: SupportCardProps) {
    return(
        <div className="backBlock card">
            <div className="iconField">
                <FontAwesomeIcon icon={icone} className="iconField_icon" />
            </div>
            <div className="textField">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
            <Link href={link} className="cardLink">
                <button className="learn-more">
                <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                </span>
                <span className="button-text">{btnText}</span>
                </button>
            </Link>
        </div>
    )
}