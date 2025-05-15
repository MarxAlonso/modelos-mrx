import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { ModelosEstaticosPage } from "./pages/ModulosPage/ModelosEstaticosPage";
import { ModelosDinamicosPage } from "./pages/ModulosPage/ModelosDinamicosPage";
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
      </Routes>
    </>
  );
}

export default App;
