export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <svg
        width="320"
        height="80"
        viewBox="0 0 320 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <text
          x="0"
          y="32"
          fontFamily="var(--font-sans-ui), sans-serif"
          fontSize="22"
          fontWeight="400"
          fill="currentColor"
          letterSpacing="0.08em"
        >
          MÓVEIS PLANEJADOS
        </text>
        <text
          x="0"
          y="56"
          fontFamily="var(--font-sans-ui), sans-serif"
          fontSize="16"
          fontWeight="600"
          fill="currentColor"
          letterSpacing="0.22em"
        >
          SÃO JOSÉ
        </text>
      </svg>
    </div>
  );
}
