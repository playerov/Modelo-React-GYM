import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { ClaseDetailPage } from "./pages/ClaseDetailPage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";

// Componente raíz de la SPA.
export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/clases/:id" element={<ClaseDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}