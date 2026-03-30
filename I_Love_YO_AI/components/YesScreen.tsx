// components/YesScreen.tsx

interface Heart {
  id: number;
  x: number;
  y: number;
  delay: number;
}

interface YesScreenProps {
  hearts: Heart[];
}

export default function YesScreen({ hearts }: YesScreenProps) {
  return (
    <div className="yes-screen">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="heart-particle"
          style={{
            left: `${h.x}%`,
            top: `${h.y}%`,
            animationDelay: `${h.delay}s`,
          }}
        >
          💗
        </span>
      ))}

      <div className="haru-big">🐾</div>
      <p className="yes-msg">Yay!! Haru loves you too!!</p>
      <p className="yes-sub">💕 Forever and ever 💕</p>

      <style jsx>{`
        .yes-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 360px;
          width: 100%;
          position: relative;
        }
        .heart-particle {
          position: absolute;
          font-size: 20px;
          animation: flyUp 1.5s ease-out forwards;
          pointer-events: none;
        }
        @keyframes flyUp {
          0%   { transform: translateY(0) scale(0); opacity: 1; }
          100% { transform: translateY(-120px) scale(1.4); opacity: 0; }
        }
        .haru-big {
          font-size: 80px;
          animation: bounce 0.5s ease infinite alternate;
        }
        @keyframes bounce {
          from { transform: scale(1); }
          to   { transform: scale(1.15) rotate(5deg); }
        }
        .yes-msg {
          font-size: 24px;
          font-weight: 900;
          color: #ff4081;
          text-align: center;
          margin-top: 20px;
        }
        .yes-sub {
          font-size: 16px;
          color: #ffb3c6;
          margin-top: 8px;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}
