// components/HaruFace.tsx

type Mood = "happy" | "sad" | "crying";

interface HaruFaceProps {
  mood: Mood;
}

export default function HaruFace({ mood }: HaruFaceProps) {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <rect x="25" y="35" width="70" height="65" rx="22" fill="#FFF5E4" stroke="#D4A574" strokeWidth="2" />

      {/* Ears */}
      <ellipse cx="38" cy="32" rx="10" ry="13" fill="#FFF5E4" stroke="#D4A574" strokeWidth="2" />
      <ellipse cx="82" cy="32" rx="10" ry="13" fill="#FFF5E4" stroke="#D4A574" strokeWidth="2" />
      <ellipse cx="38" cy="33" rx="5" ry="8" fill="#FFCBA4" />
      <ellipse cx="82" cy="33" rx="5" ry="8" fill="#FFCBA4" />

      {/* Eyes */}
      {mood === "crying" ? (
        <>
          <path d="M44 58 Q48 54 52 58" stroke="#5C3D2E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M68 58 Q72 54 76 58" stroke="#5C3D2E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <ellipse cx="49" cy="66" rx="3" ry="4" fill="#AEE6FF" opacity="0.8" />
          <ellipse cx="71" cy="66" rx="3" ry="4" fill="#AEE6FF" opacity="0.8" />
        </>
      ) : (
        <>
          <circle cx="49" cy="60" r="6" fill="#5C3D2E" />
          <circle cx="71" cy="60" r="6" fill="#5C3D2E" />
          <circle cx="51" cy="58" r="2" fill="white" />
          <circle cx="73" cy="58" r="2" fill="white" />
          {mood === "sad" && (
            <>
              <path d="M42 55 Q45 52 49 55" stroke="#5C3D2E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <path d="M71 55 Q75 52 78 55" stroke="#5C3D2E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            </>
          )}
        </>
      )}

      {/* Nose */}
      <ellipse cx="60" cy="70" rx="3" ry="2" fill="#D4A574" />

      {/* Mouth */}
      {mood === "happy" ? (
        <path d="M53 75 Q60 81 67 75" stroke="#5C3D2E" strokeWidth="2" strokeLinecap="round" fill="none" />
      ) : (
        <path d="M53 77 Q60 73 67 77" stroke="#5C3D2E" strokeWidth="2" strokeLinecap="round" fill="none" />
      )}

      {/* Blush */}
      <ellipse cx="40" cy="72" rx="7" ry="4" fill="#FFB3B3" opacity="0.5" />
      <ellipse cx="80" cy="72" rx="7" ry="4" fill="#FFB3B3" opacity="0.5" />

      {/* Paws */}
      <ellipse cx="38" cy="92" rx="13" ry="9" fill="#FFF5E4" stroke="#D4A574" strokeWidth="1.5" />
      <ellipse cx="82" cy="92" rx="13" ry="9" fill="#FFF5E4" stroke="#D4A574" strokeWidth="1.5" />
    </svg>
  );
}
