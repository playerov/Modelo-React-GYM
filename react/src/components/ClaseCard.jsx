import { Link } from "react-router-dom";

export function ClaseCard({ clase }) {
  return (
    <article className="card">
      <Link to={`/clases/${clase.id}`}>
        <div className="card-image-wrapper">
          <img src={clase.imagen} alt={clase.nombre} />
          <span className="badge-platform">{clase.categoria}</span>
        </div>
        <div className="card-body">
          <h3 className="card-title">{clase.nombre}</h3>
          <p>👨‍🏫 {clase.instructor}</p>
          <div className="card-meta">
            <span>⏱️ {clase.duracion} min</span>
            <span>📈 {clase.nivel}</span>
          </div>
          <p>
            🍺 {clase.birra_incluida.nombre} ({clase.birra_incluida.tipo})
          </p>
        </div>
      </Link>
    </article>
  );
}