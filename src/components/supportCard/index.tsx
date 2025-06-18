import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import "./supportCard.css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type SupportCardProps = {
    icone: IconProp;
    title: string;
    text: string;
}



export default function SupportCard({ icone, title, text}: SupportCardProps) {
    return(
        <div className="backBlock card">
            <div className="iconField">
                <FontAwesomeIcon icon={icone} className="iconField_icon" />
            </div>
            <div className="textField">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}