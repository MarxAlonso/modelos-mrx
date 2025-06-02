import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { ModelosEstaticosPage } from "./pages/ModulosPage/ModelosEstaticosPage";
import { ModelosDinamicosPage } from "./pages/ModulosPage/ModelosDinamicosPage";
import { FrontEndPage } from "./pages/Programacion/FrontEndPage/FrontEndPage";
import { AprendiendoHtmlPage } from "./pages/Programacion/FrontEndPage/AprendiendoHtmlPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/modulosestaticos"
          element={<ModelosEstaticosPage />}
        ></Route>
        <Route
          path="/modulosdinamicos"
          element={<ModelosDinamicosPage />}
        ></Route>
        <Route
          path="/frontend"
          element={<FrontEndPage />}
        ></Route>
        <Route
          path="/aprendiendohtml"
          element={<AprendiendoHtmlPage />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
