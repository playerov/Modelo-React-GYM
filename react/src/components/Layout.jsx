import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";
import { LoginForm } from "./LoginForm.jsx";

// Layout principal de la app.
// Incluye cabecera, navegación básica y pie de página.
// El login se integra en la cabecera usando el contexto de autenticación.

export function Layout({ children }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="app-shell">
      <header>
        <div className="brand">
          <span className="brand-title">🍻💪 BIRRA Y BÍCEPS</span>
          <span className="brand-subtitle">Porque la vida es equilibrio.</span>
        </div>
        <nav className="layout-nav">
          <Link to="/">Inicio</Link>

          {user ? (
            <>
              <span className="user-chip">
                Bienvenido, {user.firstName} - {user.rol}
              </span>
              <button
                className="btn-gaming btn-secondary"
                onClick={handleLogout}
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <LoginForm />
          )}
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>
          🍻 Birra y Bíceps © {currentYear} - Gimnasio con Actitud | Bebe con
          Responsabilidad 🍺
        </p>
      </footer>
    </div>
  );
}
