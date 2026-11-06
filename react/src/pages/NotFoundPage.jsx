import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="status">
      <h1>404</h1>
      <h2>¡Clase No Encontrada!</h2>
      <p>Parece que esta clase se fue a tomar una birra sin avisar. 🍻</p>
      <p>
        No te preocupes, tenemos muchas otras clases esperándote en el
        catálogo.
      </p>
      <Link to="/" className="btn-gaming">
        🔙 Volver al Catálogo
      </Link>
      <p style={{ fontSize: "3rem", margin: "1.5rem 0 0" }}>🍺🏋️‍♂️</p>
    </section>
  );
}