'use client';
import Link from "next/link";
import "./footer.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faGithub, faLinkedin, faYoutube} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

config.autoAddCss = false;

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__content__logo">
                    <Image width={150} height={150} alt="logo" src={"/icon/logoAmbarCode.svg"} ></Image>
                </div>
                <div className="footerSocialLinks">

                    <Link target="_blank" href={"https://github.com/AmbarProject"} className="footerSocialLinks__link">
                        <p>GitHub</p>
                        <FontAwesomeIcon icon={faGithub} className="icon"/>
                    </Link>
                    <span className="bulletLink"></span>
                    <Link target="_blank" href={"https://www.linkedin.com/company/projetoambar/about/"} className="footerSocialLinks__link">
                        <p>Linkedin</p>
                        <FontAwesomeIcon icon={faLinkedin} className="icon"/>
                    </Link>
                    <span className="bulletLink"></span>
                    <Link target="_blank" href={"https://www.youtube.com/channel/UCtXbRez_ADz5MXOe3N5U0rA"} className="footerSocialLinks__link">
                        <p>Youtube</p>
                        <FontAwesomeIcon icon={faYoutube} className="icon"/>
                    </Link>
                </div>
                <div className="footerButtons">
                    <Link href={"/"} className="footerButtons__link">
                        <button className="footerButtons__link__button">Começar Agora</button>
                    </Link>
                    <Link href={"https://documentation-ambar-code.vercel.app/"} className="footerButtons__link">
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
