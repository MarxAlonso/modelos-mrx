import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { ModelosEstaticosPage } from "./pages/ModulosPage/ModelosEstaticosPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/modulosestaticos" element={<ModelosEstaticosPage />}></Route>
      </Routes>
    </>
  );
}

export default App;