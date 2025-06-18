"use client";
import React from "react";
import "./header.css";
import { useState, useEffect } from "react";
import Link from "next/link";

export function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true); 
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`header ${showHeader ? "visible" : "hidden"}`}>
      <nav className="navigation">
        <div className="header_left">
          <div className="header_logo"></div>
          <div className="logo_interprise"></div>
          <div className="header_btn">
            <button>Baixar</button>
          </div>
        </div>

        <div className="header_main">
          <ul>
            <li className="link_item"><Link href="#home">Home</Link></li>
            <li className="link_item"><Link href="#pitch">Pitch</Link></li>
            <li className="link_item"><Link href="#ecossistema">Ecossistema</Link></li>
            <li className="link_item"><Link href="#suporte">Suporte</Link></li>
          </ul>
        </div>
        
        <div className="header_right">
          
          {/*
          <div className="header_search">
            <input type="text" placeholder="Procurar na Documentação" />
          </div>
          <button className="atalho_btn">
            CTR <br /> + <br /> K
          </button>
          
          <div className="dropdown">
            <ul className="dropdown-menu">
              <li>
                <img src={"./icon/bandeira.svg"} alt="Bandeira do Brasil" /> BR
              </li>
            </ul>
          </div>
          */}
        </div>
        
      </nav>
    </header>
  );
}
