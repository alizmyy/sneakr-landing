/* Кроссовок нарисован прямо в коде — это SVG (векторная графика).
   Никаких картинок из интернета: сайт работает даже без сети.
   Компонент принимает цвета (body, sole, accent), поэтому один и тот же
   кроссовок перекрашивается под каждый товар в каталоге */
function Sneaker({ body = '#ccff00', sole = '#ffffff', accent = '#141414', className = '' }) {
  return (
    <svg viewBox="0 0 512 300" className={className} role="img" aria-label="Кроссовок">
      {/* мягкая тень под подошвой */}
      <ellipse cx="256" cy="282" rx="215" ry="12" fill="#000" opacity="0.4" />
      {/* подошва */}
      <rect x="22" y="234" width="470" height="38" rx="19" fill={sole} />
      {/* тонкая полоска на подошве */}
      <rect x="34" y="242" width="446" height="8" rx="4" fill={accent} opacity="0.25" />
      {/* верх кроссовка */}
      <path
        d="M36 236 L36 142 Q36 90 72 80 Q106 72 126 94 Q146 84 168 96 Q218 128 282 146 Q356 164 436 176 Q486 184 484 216 Q482 236 448 236 Z"
        fill={body}
      />
      {/* резиновый носок (toe cap) */}
      <path
        d="M398 236 L398 178 Q450 182 480 197 Q486 206 484 216 Q482 236 448 236 Z"
        fill={accent}
      />
      {/* молния — логотип бренда */}
      <path d="M232 96 L296 96 L262 150 L306 150 L208 230 L228 176 L184 176 Z" fill={accent} />
      {/* шнурки */}
      <g stroke={sole} strokeWidth="9" strokeLinecap="round" opacity="0.9">
        <line x1="138" y1="106" x2="182" y2="130" />
        <line x1="130" y1="126" x2="178" y2="150" />
        <line x1="128" y1="148" x2="174" y2="170" />
      </g>
      {/* мягкая вставка на голенище */}
      <ellipse cx="104" cy="92" rx="30" ry="12" fill={accent} opacity="0.85" />
      {/* вентиляционные точки у пятки */}
      <g fill={accent} opacity="0.5">
        <circle cx="80" cy="160" r="5" />
        <circle cx="80" cy="182" r="5" />
        <circle cx="80" cy="204" r="5" />
      </g>
    </svg>
  )
}

export default Sneaker
