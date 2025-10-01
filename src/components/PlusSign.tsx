type Position = "tr" | "tl" | "br" | "bl";

interface PlusSignProps {
  position?: Position;
}

export default function PlusSign({ position = "tl" }: PlusSignProps) {
  const positionClasses: Record<Position, string> = {
    tl: "top-16 left-16 rotate-90",
    tr: "top-16 right-16 rotate-180",
    bl: "bottom-16 left-16",
    br: "bottom-16 right-16 -rotate-90",
  };

  return (
    <div className={`absolute ${positionClasses[position]}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Draw an L shape (corner) */}
        <path
          d="M4 4V16H16"
          stroke="#bfbfbf"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
