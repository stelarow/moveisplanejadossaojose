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
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap');
          `}
        </style>
        <text
          x="0"
          y="32"
          fontFamily="Montserrat, sans-serif"
          fontSize="22"
          fontWeight="300"
          fill="currentColor"
          letterSpacing="1"
        >
          MÓVEIS PLANEJADOS
        </text>
        <text
          x="0"
          y="56"
          fontFamily="Montserrat, sans-serif"
          fontSize="16"
          fontWeight="600"
          fill="currentColor"
          letterSpacing="3"
        >
          SÃO JOSÉ
        </text>
      </svg>
    </div>
  );
}
