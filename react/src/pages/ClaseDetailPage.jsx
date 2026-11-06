import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { apiFetch } from "../api/client.js";
import { NotFoundPage } from "./NotFoundPage.jsx";

// Página de detalle de una clase.
export function ClaseDetailPage() {
  const { id } = useParams();
  const [clase, setClase] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadClase = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await apiFetch(`/clases/${id}`);
        setClase(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadClase();
  }, [id]);

  if (loading) {
    return (
      <section className="status">
        <h2>⏳ Cargando clase...</h2>
      </section>
    );
  }

  if (error) {
    if (error.status === 404) {
      return <NotFoundPage />;
    }
    return (
      <section className="status">
        <h2>🍻 La función está demorada</h2>
        <p>{error.message}</p>
        <p>Intenta nuevamente en algunos instantes...</p>
      </section>
    );
  }

  return (
    <section>
      <Link to="/" className="btn-gaming btn-secondary">
        ⬅ Volver al catálogo
      </Link>

      <h1>{clase.nombre}</h1>
      <p>👨‍🏫 Instructor: {clase.instructor}</p>

      <div className="detail-layout">
        <div>
          <img
            src={clase.imagen}
            alt={clase.nombre}
            className="detail-image"
          />

          <div className="detail-section">
            <h3>🍺 Cerveza incluida</h3>
            <p>
              <strong>Nombre:</strong> {clase.birra_incluida.nombre}
            </p>
            <p>
              <strong>Tipo:</strong> {clase.birra_incluida.tipo}
            </p>
            <p>
              <strong>Graduación:</strong> {clase.birra_incluida.graduacion}
            </p>
            <p>
              <strong>Origen:</strong> {clase.birra_incluida.origen}
            </p>
            <p>{clase.birra_incluida.descripcion}</p>
          </div>
        </div>

        <div>
          <div className="detail-section">
            <h3>📄 Descripción</h3>
            <p>{clase.resumen}</p>
            <ul className="pill-list">
              <li>⏱️ {clase.duracion} min</li>
              <li>📈 {clase.nivel}</li>
              <li>🔥 {clase.calorias_quemadas} cal</li>
            </ul>
          </div>

          <div className="detail-section">
            <h3>🕒 Horarios disponibles</h3>
            <ul className="pill-list">
              {clase.horarios.map((horario) => (
                <li key={horario}>{horario}</li>
              ))}
            </ul>
          </div>

          <div className="detail-section">
            <h3>🏋️ Equipamiento necesario</h3>
            <ul className="pill-list">
              {clase.equipamiento.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="detail-section">
            <h3>🌟 Beneficios</h3>
            <ul className="pill-list">
              {clase.beneficios.map((beneficio) => (
                <li key={beneficio}>{beneficio}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}