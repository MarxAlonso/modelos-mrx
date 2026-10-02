import "./panal.css";

/* Celdas de un panal: el dibujo de fondo de las portadas. Cada par es la columna y
   la fila de una celda; las filas impares van desplazadas media celda. */
const CELDAS: [number, number][] = [
  [0, 0], [1, 0], [3, 0], [0, 1], [1, 1], [2, 1], [1, 2], [2, 2], [3, 2], [0, 3], [2, 3],
];
const hexagono = ([col, fila]: [number, number]) => {
  const cx = 34 + col * 52 + (fila % 2) * 26;
  const cy = 36 + fila * 45;
  return `M${cx} ${cy - 30}l26 15v30l-26 15-26-15v-30z`;
};

export const Panal = ({ className }: { className: string }) => (
  <svg className={`mrx-panal ${className}`} viewBox="0 0 250 210" aria-hidden="true">
    {CELDAS.map((celda, i) => (
      <path key={i} d={hexagono(celda)} style={{ animationDelay: `${(i % 5) * -1.3}s` }} />
    ))}
    {/* nodos: los átomos que quedan encendidos en los vértices */}
    {CELDAS.filter((_, i) => i % 3 === 0).map(([col, fila], i) => (
      <circle
        key={i}
        cx={34 + col * 52 + (fila % 2) * 26}
        cy={6 + fila * 45}
        r="3"
        style={{ animationDelay: `${i * -0.7}s` }}
      />
    ))}
  </svg>
);
