'use client';
import Link from "next/link";
import "./footer.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faDiscord, faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

config.autoAddCss = false;

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__content__logo">
                    <img src={"./logoAmbarCode.svg"} alt="" />
                </div>
                <div className="footerSocialLinks">
                    <Link target="_blank" href={"/"} className="footerSocialLinks__link">
                        <p>Discord Community</p>
                        <FontAwesomeIcon icon={faDiscord} className="icon"/>
                    </Link>

                    <Link target="_blank" href={"https://github.com/Ambar-Project"} className="footerSocialLinks__link">
                        <p>GitHub</p>
                        <FontAwesomeIcon icon={faGithub} className="icon"/>
                    </Link>

                    <Link target="_blank" href={"https://www.linkedin.com/company/projetoambar/about/"} className="footerSocialLinks__link">
                        <p>Linkedin</p>
                        <FontAwesomeIcon icon={faLinkedin} className="icon"/>
                    </Link>

                    <Link href={"/"} className="footerSocialLinks__link">
                        <p>Instagram</p>
                        <FontAwesomeIcon icon={faInstagram} className="icon"/>
                    </Link>
                </div>
                <div className="footerButtons">
                    <Link href={"/"} className="footerButtons__link">
                        <button className="footerButtons__link__button">Começar Agora</button>
                    </Link>
                    <Link href={"/"} className="footerButtons__link">
                        <button className="footerButtons__link__button">Documentação</button>
                    </Link>
                </div>
            </div>
            <div className="footer__content__text">
                    <div className="copyright">
                        <p>© Ambar - Todos os direitos reservados <strong>2025</strong></p>
                        <p>esse site usa coockies para melhorar a experiencias. <Link href={"/"} className="copyrightAcept">aceitar</Link></p>
                    </div>
            </div>
        </footer>
    )
}