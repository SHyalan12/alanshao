"use client";

import { useEffect, useState } from "react";

function nextDelay(char: string): number {
  if (char === " ") return 80 + Math.random() * 60;
  if (["!", "?", ",", "."].includes(char)) return 180 + Math.random() * 120;
  if (["'", "’"].includes(char)) return 60 + Math.random() * 40;
  return 60 + Math.random() * 90;
}

export default function Typewriter({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const type = () => {
      if (i >= text.length) {
        setDone(true);
        return;
      }
      i++;
      setDisplayed(text.slice(0, i));
      timeout = setTimeout(type, nextDelay(text[i - 1]));
    };

    timeout = setTimeout(type, 400);
    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <span>
      {displayed}
      <span
        className={`inline-block w-[3px] h-[0.85em] bg-gray-900 ml-1 align-middle ${
          done ? "animate-pulse" : "opacity-100"
        }`}
      />
    </span>
  );
}
