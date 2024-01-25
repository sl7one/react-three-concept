import gsap from "gsap";
import React, { useEffect } from "react";

export default function Paragraph({ text }) {
  useEffect(() => {
    text.forEach((text, idx) => {
      gsap.fromTo(
        `.span${idx}`,
        { text: "" },
        {
          text,
          duration: 1.8,
          delay: idx === 0 ? 0 : idx * 1.8,
          ease: "linear",
        }
      );
    });
  }, [text]);

  return (
    <p className="paragraph">
      {text.map((_, idx) => (
        <span className={`span${idx}`} key={idx}></span>
      ))}
    </p>
  );
}
