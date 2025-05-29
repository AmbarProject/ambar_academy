"use client";

import React, { useState, useEffect } from "react";

const words = ["Eficiência", "Produtividade", "Aprendizagem"];
const colors = ["#ce7b1d", "#c66f0b", "#ce7b1d"];

const AnimatedText = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <strong 
            style={{ 
                color: colors[index], 
                transition: "color 0.5s ease-in-out"
            }}
        >
            {words[index]}
        </strong>
    );
};

export default AnimatedText;
