import { useEffect, useState } from "react";
import { apiFetch } from "../api/client.js";

export function useClases() {
  const [clases, setClases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadClases = async () => {
      try {
        const data = await apiFetch("/clases");
        setClases(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadClases();
  }, []);

  return { clases, loading, error };
}