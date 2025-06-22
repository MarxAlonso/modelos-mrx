import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { ModelosEstaticosPage } from "./pages/ModulosPage/ModelosEstaticosPage";
import { ModelosDinamicosPage } from "./pages/ModulosPage/ModelosDinamicosPage";
import { FrontEndPage } from "./pages/Programacion/FrontEndPage/FrontEndPage";
import { AprendiendoHtmlPage } from "./pages/Programacion/FrontEndPage/AprendiendoHtmlPage";
import { AprendiendoCssPage } from "./pages/Programacion/FrontEndPage/AprendiendoCssPage";
import { AprendiendoJsPage } from "./pages/Programacion/FrontEndPage/AprendiendoJsPage";
import { AprendiendoBootstrapPage } from "./pages/Programacion/FrontEndPage/AprendiendoBootstrapPage";
import { SpringBootInfoPage } from "./pages/Programacion/SpringBootPage/SpringBootInfoPage";AprendiendoJavaPage
import { AprendiendoJavaPage } from "./pages/Programacion/SpringBootPage/AprendiendoJavaPage";
import { AprendiendoPOOPage } from "./pages/Programacion/SpringBootPage/AprendiendoPOOPage";
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
        <Route
          path="/aprendiendocss"
          element={<AprendiendoCssPage />}
        ></Route>
        <Route
          path="/aprendiendojs"
          element={<AprendiendoJsPage />}
        ></Route>
        <Route
          path="/aprendiendobootstrap"
          element={<AprendiendoBootstrapPage />}
        ></Route>
        <Route
          path="/springboot"
          element={<SpringBootInfoPage />}
        ></Route>
        <Route
          path="/aprendiendojava"
          element={<AprendiendoJavaPage />}
        ></Route>
        <Route
          path="/aprendiendopoo"
          element={<AprendiendoPOOPage />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
