'use client';
import Link from "next/link";
import "./notFound.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

config.autoAddCss = false;



export default function NotFound() {

    return(
        <div className="ErrorContainer">
            <span className="ErrorCode"><h1>404</h1></span>
            <span className="ErrorMessage">
                parece que você está perdido
            </span>
            <div className="item1"></div>
            <div className="ErrorContent">
                <span className="ErrorDescription">
                    A página que você está tentando acessar não existe
                </span>
                <div className="ErrorBtns">
                    <Link href="./" className="ErrorBtn">Voltar</Link>
                    <button className="ErrorBtn CopyBtn">
                        <FontAwesomeIcon icon={faCopy} className="icon"/>
                    </button>
                </div>
            </div>
            
        </div>
    )
}