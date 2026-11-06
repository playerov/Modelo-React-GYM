import { useState } from "react";
import { useAuth } from "../hooks/useAuth.js";
import { apiFetch } from "../api/client.js";

export function LoginForm() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const data = await apiFetch("/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });
      login(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
    >
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="btn-gaming" disabled={loading}>
        {loading ? "Ingresando..." : "Ingresar"}
      </button>
      {error && (
        <p style={{ marginTop: "0.25rem", color: "#ffb3b3", fontSize: "0.8rem" }}>
          {error.message}
        </p>
      )}
    </form>
  );
}