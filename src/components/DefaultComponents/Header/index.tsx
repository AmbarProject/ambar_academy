"use client";
import React, { useState, useEffect } from "react";
import "./header.css";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

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
          <div className="logo_interprise">
            <Image alt="logo" width={20} height={20} src="/icon/logoName.svg" />
          </div>
        </div>

        {/* Menu Hamburguer */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`header_main ${menuOpen ? "show" : ""}`}>
          <ul>
            <Link href="#home" className="link_item" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="#pitch" className="link_item" onClick={() => setMenuOpen(false)}>Pitch</Link>
            <Link href="#ecossistema" className="link_item" onClick={() => setMenuOpen(false)}>Ecossistema</Link>
            <Link href="#feature" className="link_item" onClick={() => setMenuOpen(false)}>Features</Link>
            <Link href="#suporte" className="link_item" onClick={() => setMenuOpen(false)}>Comunidade</Link>
          </ul>
        </div>

        <div className="header_right">
          <div className="header_btn">
            <Link className="buttons" target="_blank" href={"https://documentation-ambar-code.vercel.app/"}>Documentação</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
