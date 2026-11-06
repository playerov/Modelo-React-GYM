import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children}){
  const [user, setUser] = useState(null);

  useEffect(() =>{
    const saved = localStorage.getItem("user");
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);//¿Qué significa []?
//Significa que este efecto se ejecuta una sola vez cuando el componente se monta.

  const login = (userData) =>{
    const { password, ...safeUser } = userData;
    setUser(safeUser);
    localStorage.setItem("user", JSON.stringify(safeUser));
  };

  const logout = () =>{
    setUser(null);
    localStorage.removeItem("user");
  };
  
  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
//Este código sirve para manejar el inicio y cierre de sesión de los usuarios de nuestra aplicación.
//es un sistema que recuerda quién inició sesión y permite compartir esa información con toda la aplicación.