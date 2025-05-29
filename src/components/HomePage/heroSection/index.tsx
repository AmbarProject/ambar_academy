import Link from "next/link";
import "./hero.css";
import AnimatedText from "@/components/animatedTitle";
import Image from "next/image";

export function HeroSection({id}: {id: string}) {
    return (
        <div id={id} className="heroSection">

            <div className="heroSection__container">

                <div className="backgroundText">
                    <span className="floatingText" style={{ animationDelay: "0s" }}>
                        Q1w2e3R4! A7b8C9d0# XyZ1@2w3$ LmN4%5o6^ P5hsw1T0& <br/>
                        JkL7*8m9( QwErTyUi) AsDfGhJk_ ZxCvBnM1+ R8t7y6U5!<br/>
                        V4b3n2M1# WqErTyUi$ OpAsDfGh% LkJ9h8G7^ FdSaQwEr&<br/>
                        TzXcVbNm( UiOpAsDf_ GhJkLmNo+
                    </span>
                    <span className="floatingText" style={{ animationDelay: "2s" }}>
                        Q1w2e3R4! A7b8C9d0# XyZ1@2w3$ LmN4%5o6^ P5hsw1T0& <br/>
                        JkL7*8m9( QwErTyUi) AsDfGhJk_ ZxCvBnM1+ R8t7y6U5!<br/>
                        V4b3n2M1# WqErTyUi$ OpAsDfGh% LkJ9h8G7^ FdSaQwEr&<br/>
                        TzXcVbNm( UiOpAsDf_ GhJkLmNo+<br/>
                    </span>
                    <span className="floatingText" style={{ animationDelay: "4s" }}>
                        Q1w2e3R4! A7b8C9d0# XyZ1@2w3$ LmN4%5o6^ P5hsw1T0& <br/>
                        JkL7*8m9( QwErTyUi) AsDfGhJk_ ZxCvBnM1+ R8t7y6U5!<br/>
                        V4b3n2M1# WqErTyUi$ OpAsDfGh% LkJ9h8G7^ FdSaQwEr&<br/>
                        TzXcVbNm( UiOpAsDf_ GhJkLmNo+<br/>
                    </span>
                    <span className="floatingText" style={{ animationDelay: "6s" }}>
                        Q1w2e3R4! A7b8C9d0# XyZ1@2w3$ LmN4%5o6^ P5hsw1T0& <br/>
                        JkL7*8m9( QwErTyUi) AsDfGhJk_ ZxCvBnM1+ R8t7y6U5!<br/>
                        V4b3n2M1# WqErTyUi$ OpAsDfGh% LkJ9h8G7^ FdSaQwEr&<br/>
                        TzXcVbNm( UiOpAsDf_ GhJkLmNo+<br/>
                    </span>
                    <span className="floatingText" style={{ animationDelay: "8s" }}>
                        Q1w2e3R4! A7b8C9d0# XyZ1@2w3$ LmN4%5o6^ P5hsw1T0& <br/>
                        JkL7*8m9( QwErTyUi) AsDfGhJk_ ZxCvBnM1+ R8t7y6U5!<br/>
                        V4b3n2M1# WqErTyUi$ OpAsDfGh% LkJ9h8G7^ FdSaQwEr&<br/>
                        TzXcVbNm( UiOpAsDf_ GhJkLmNo+<br/>
                    </span>
                </div>

                <div className="imageBackfround"><Image src="./icon/logoBack.svg" alt="" /></div>
                
                <div className="heroSectionTitle">
                    <h1>A linguagem focada na <br/> <AnimatedText/></h1>
                </div>
                <div className="heroSectionDescription">
                    <div className="actionButtons">
                        <Link href={"/"} ><button>Baixar</button></Link>
                        <Link href={"/"} ><button>Documentação</button></Link>
                    </div>
                    <div className="madeBy">
                        <p>Feito Por</p>
                        <Image src="./icon/logoAmbar.svg" alt="" /> 
                        <strong>Ambar</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}