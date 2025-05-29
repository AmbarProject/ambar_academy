"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./scrollContainer.css";
import Link from "next/link";

const FadeElement = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({ threshold: 0.7 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      exit={{ opacity: 0 }} // Efeito ao sair da tela
      transition={{ duration: 0.5 }}
      className="scrollContainer__content"
    >
      {children}
    </motion.div>
  );
};

export function ScrollContainer({id} : {id: string}) {
  return (
    <div id={id}>
      <div className="scrollContainer__title">
        <h1>
          EC0SSISTEMA <strong>AMBAR</strong>
        </h1>
      </div>
        <div className="scrollContainer">
            <FadeElement>
            <div className="scrollContainer__content">
                <div className="scrollContainer__content__img">
                <div className="imageContent imageAmbarcode">
                    <span className="badge">AMBARC0DE</span>
                    <Link href="google.com"> </Link>
                </div>
                </div>
                <div className="scrollContent_text">
                <h1>
                    AMBAR.<strong>C0DE</strong>
                </h1>
                <p>
                    Uma plataforma que democratiza o ensino de programação, com aulas e materiais 
                    acessíveis. Aprenda a programar com foco em eficiência, inclusão e impacto social.
                </p>
                </div>
            </div>
            </FadeElement>
            <FadeElement>
            <div className="scrollContainer__content">
                <div className="scrollContainer__content__img">
                  <div className="imageContent imageAcademy">
                      <span className="badge">ACADEMY</span>
                  </div>
                </div>
                <div className="scrollContent_text">
                <h1>
                    AMBAR.<strong>ACADEMY</strong>
                </h1>
                <p>
                    O motor de tradução da linguagem Ambar.Code, projetado em C++ para garantir desempenho, 
                    portabilidade e baixo consumo energético. Uma base poderosa para programar com propósito.
                </p>
                </div>
            </div>
            </FadeElement>
            <FadeElement>
            <div className="scrollContainer__content">
                <div className="scrollContainer__content__img">
                <div className="imageContent imageAmbarc">
                    <span className="badge">AMBARC</span>
                </div>
                </div>
                <div className="scrollContent_text">
                  <h1>
                      AMBAR<strong>C</strong>
                  </h1>
                  <p>
                      Ambar.Code é uma linguagem de programação criada para ser eficiente, acessível e ecologicamente consciente. 
                      Simples de aprender, poderosa de executar – leve a programação aonde nunca chegou.
                  </p>
                </div>
            </div>
            </FadeElement>
        </div>
    </div>
  );
}
