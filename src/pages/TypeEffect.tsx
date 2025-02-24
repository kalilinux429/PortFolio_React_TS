// src/components/TypingEffect.tsx
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingEffect: React.FC = () => {
  const typedElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedElement.current) {
      const typed = new Typed(typedElement.current, {
        strings: ["React JS", "Redux", "Javascript" ,"Typescript","Tailwind Css","API integration","Node Js","Mongo DB","CI/CD"],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true,
      });

      return () => {
        typed.destroy(); // Cleanup on unmount
      };
    }
  }, []);

  return <span ref={typedElement} className="text-xl font-bold text-blue-600"></span>;
};

export default TypingEffect;
