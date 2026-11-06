export const API_BASE_URL = "http://localhost:3000/api";

export async function apiFetch(path, options = {}) {
    const res = await fetch(`${API_BASE_URL}${path}`,{
        headers: {"Content-Type": "application/json"},
        ...options,
    });

    const data = await res.json();

    if (!res.ok) {
        const error = new Error(data.error || "Error en el servidor");
        error.status = res.status;
        throw error;
    }
    return data;
}


//apifetch es una función que se encarga de hablar con el servidor y devolvernos la respuesta.
//Pedir información → Esperar respuesta → Leer los datos → Comprobar errores → Devolver información.