// components/HaruCard.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import HaruFace from "./HaruFace";
import YesScreen from "./YesScreen";

const MESSAGES = [
  "Do You Love Me, Haru?",
  "Are you sure? 🥺",
  "Reaaaally sure? 👉👈",
  "Haru will be sad... 😢",
  "Please? 🙏",
  "Last chance!! 😤",
  "Haru is crying... 😭",
  "HARU IS DEVASTATED 💔",
];

type Mood = "happy" | "sad" | "crying";

function getMood(noCount: number): Mood {
  if (noCount >= 5) return "crying";
  if (noCount >= 2) return "sad";
  return "happy";
}

interface Heart {
  id: number;
  x: number;
  y: number;
  delay: number;
}

export default function HaruCard() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [hearts, setHearts] = useState<Heart[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const message = MESSAGES[Math.min(noCount, MESSAGES.length - 1)];
  const yesSize = Math.min(16 + noCount * 8, 64);
  const mood = getMood(noCount);

  const moveNoButton = () => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setNoPos({
      x: Math.random() * (rect.width - 120),
      y: Math.random() * (rect.height - 60),
    });
    setNoCount((c) => c + 1);
  };

  const handleYes = () => {
    setYesPressed(true);
    setHearts(
      Array.from({ length: 20 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 0.5,
      }))
    );
  };

  return (
    <div className="card" ref={containerRef}>
      {yesPressed ? (
        <YesScreen hearts={hearts} />
      ) : (
        <>
          {/* Character */}
          <div className={`haru-wrap ${mood === "crying" ? "shake" : ""}`}>
            <HaruFace mood={mood} />
          </div>

          {/* Question */}
          <h1 className="question">{message}</h1>

          {/* Buttons */}
          <div className="btn-area">
            <button
              className="btn yes-btn"
              style={{ fontSize: `${yesSize}px` }}
              onClick={handleYes}
            >
              Yes 💕
            </button>

            {isMounted && (
              <button
                className="btn no-btn"
                style={
                  noCount > 0
                    ? { position: "absolute", left: noPos.x, top: noPos.y }
                    : {}
                }
                onMouseEnter={moveNoButton}
                onTouchStart={moveNoButton}
                onClick={moveNoButton}
              >
                No
              </button>
            )}
          </div>
        </>
      )}

      <style jsx>{`
        .card {
          background: white;
          border-radius: 32px;
          padding: 40px 48px 48px;
          box-shadow: 0 20px 60px rgba(255, 160, 180, 0.3),
            0 4px 16px rgba(0, 0, 0, 0.06);
          width: 360px;
          min-height: 460px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
          border: 2px solid #ffe4ee;
        }

        .haru-wrap {
          margin-bottom: 8px;
          animation: float 3s ease-in-out infinite;
          filter: drop-shadow(0 4px 8px rgba(212, 165, 116, 0.3));
        }

        .shake {
          animation: shake 0.4s ease-in-out infinite,
            float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25%       { transform: translateX(-4px); }
          75%       { transform: translateX(4px); }
        }

        .question {
          font-size: 22px;
          font-weight: 800;
          color: #3d2b1f;
          text-align: center;
          margin-bottom: 32px;
          line-height: 1.4;
          min-height: 64px;
        }

        .btn-area {
          position: relative;
          width: 100%;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .btn {
          padding: 10px 28px;
          border-radius: 50px;
          border: none;
          font-family: var(--font-nunito), sans-serif;
          font-weight: 800;
          cursor: pointer;
          white-space: nowrap;
          transition: transform 0.15s, box-shadow 0.15s;
        }

        .yes-btn {
          background: linear-gradient(135deg, #ff6b9d, #ff4081);
          color: white;
          box-shadow: 0 4px 16px rgba(255, 64, 129, 0.4);
          transition: font-size 0.3s ease, transform 0.15s, box-shadow 0.15s;
          position: relative;
          z-index: 1;
        }

        .yes-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 6px 20px rgba(255, 64, 129, 0.5);
        }

        .no-btn {
          font-size: 16px;
          background: #f0f0f0;
          color: #888;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          z-index: 2;
        }

        .no-btn:hover {
          background: #e8e8e8;
        }
      `}</style>
    </div>
  );
}
