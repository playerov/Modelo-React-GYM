import { useClases } from "../hooks/useClases.js";
import { ClaseCard } from "../components/ClaseCard.jsx";

const CATEGORIAS = ["Cardio", "Fuerza", "Flexibilidad", "Combate"].sort();

// Página principal: catálogo de clases agrupadas por categoría.
export function HomePage() {
  const { clases, loading, error } = useClases();

  if (loading) {
    return (
      <section className="status">
        <h2>⏳ Cargando clases...</h2>
        <p>Estamos preparando las cervezas y los pesos 🍺</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="status">
        <h2>🍻 La función está demorada</h2>
        <p>{error.message}</p>
        <p>Intenta nuevamente en algunos instantes...</p>
      </section>
    );
  }

  if (clases.length === 0) {
    return (
      <section className="status">
        <h2>⚠️ Sin datos</h2>
        <p>No se recibieron clases desde la API.</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Catálogo de clases</h1>
      <div className="grid-platforms">
        {CATEGORIAS.map((cat) => (
          <article key={cat} className="platform-section">
            <h2>🍺 {cat}</h2>
            <div className="games-grid">
              {clases
                .filter((clase) => clase.categoria === cat)
                .map((clase) => (
                  <ClaseCard key={clase.id} clase={clase} />
                ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}