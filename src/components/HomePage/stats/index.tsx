"use client";
import { useEffect } from "react";
import "./stats.css";

export function Stats() {
  useEffect(() => {
    function animateNumbers() {
      const statNumbers = document.querySelectorAll(".stat-number");
      statNumbers.forEach((num) => {
        const finalNumber = num.getAttribute("data-value") || "0";
        num.textContent = "0";

        const isPercentage = finalNumber.includes("%");
        const isDecimal = finalNumber.includes(".");
        const isKg = finalNumber.includes("kg");
        const targetValue = parseFloat(finalNumber.replace(/[^\d.]/g, ""));

        let currentValue = 0;
        const increment = targetValue / 100;
        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= targetValue) {
            num.textContent = finalNumber;
            clearInterval(timer);
          } else {
            const displayValue = isDecimal
              ? currentValue.toFixed(2)
              : Math.floor(currentValue);
            num.textContent =
              displayValue +
              (isPercentage ? "%" : "") +
              (isKg ? "kg" : "");
          }
        }, 20);
      });
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.classList.contains("stats")) {
          animateNumbers();
        }
      });
    });

    document.querySelectorAll(".stats").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats">
        
      <div className="container">
        <div className="lineGradient">
            
        </div>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number" data-value="15%">0%</div>
            <div className="stat-label">Redução no Consumo Energético</div>
          </div>
          <div className="stat-card">
            <div className="stat-number" data-value="4.23kg">0kg</div>
            <div className="stat-label">CO₂ Economizado por Aplicação/Ano</div>
          </div>
          <div className="stat-card">
            <div className="stat-number" data-value="8.35%">0%</div>
            <div className="stat-label">Melhoria na Eficiência Computacional</div>
          </div>
          <div className="stat-card">
            <div className="stat-number" data-value="100%">0%</div>
            <div className="stat-label">Open Source e Acessível</div>
          </div>
        </div>
      </div>
    </div>
  );
}