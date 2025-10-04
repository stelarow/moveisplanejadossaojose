export default function LogoExport() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-8">
      <div className="text-center">
        <svg
          width="600"
          height="120"
          viewBox="0 0 600 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto"
        >
          <style>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');
            `}
          </style>
          <text
            x="300"
            y="50"
            fontFamily="Montserrat, sans-serif"
            fontSize="36"
            fontWeight="300"
            fill="#000000"
            letterSpacing="3"
            textAnchor="middle"
          >
            MÓVEIS PLANEJADOS
          </text>
          <text
            x="300"
            y="90"
            fontFamily="Montserrat, sans-serif"
            fontSize="28"
            fontWeight="600"
            fill="#000000"
            letterSpacing="6"
            textAnchor="middle"
          >
            SÃO JOSÉ
          </text>
        </svg>
        <p className="mt-8 text-sm text-gray-500 font-mono">
          Tire um screenshot desta área e salve como logo.png (600x120px)
        </p>
      </div>
    </div>
  );
}
