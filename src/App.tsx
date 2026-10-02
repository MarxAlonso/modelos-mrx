import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Loader } from "./common/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage/HomePage").then(m => ({ default: m.HomePage })));
const ModelosEstaticosPage = lazy(() => import("./pages/ModulosPage/ModelosEstaticosPage").then(m => ({ default: m.ModelosEstaticosPage })));
const ModelosDinamicosPage = lazy(() => import("./pages/ModulosPage/ModelosDinamicosPage").then(m => ({ default: m.ModelosDinamicosPage })));
const FrontEndPage = lazy(() => import("./pages/Programacion/FrontEndPage/FrontEndPage").then(m => ({ default: m.FrontEndPage })));
const AprendiendoHtmlPage = lazy(() => import("./pages/Programacion/FrontEndPage/AprendiendoHtmlPage").then(m => ({ default: m.AprendiendoHtmlPage })));
const AprendiendoCssPage = lazy(() => import("./pages/Programacion/FrontEndPage/AprendiendoCssPage").then(m => ({ default: m.AprendiendoCssPage })));
const AprendiendoJsPage = lazy(() => import("./pages/Programacion/FrontEndPage/AprendiendoJsPage").then(m => ({ default: m.AprendiendoJsPage })));
const AprendiendoBootstrapPage = lazy(() => import("./pages/Programacion/FrontEndPage/AprendiendoBootstrapPage").then(m => ({ default: m.AprendiendoBootstrapPage })));
const SpringBootInfoPage = lazy(() => import("./pages/Programacion/SpringBootPage/SpringBootInfoPage").then(m => ({ default: m.SpringBootInfoPage })));
const AprendiendoJavaPage = lazy(() => import("./pages/Programacion/SpringBootPage/AprendiendoJavaPage").then(m => ({ default: m.AprendiendoJavaPage })));
const AprendiendoPOOPage = lazy(() => import("./pages/Programacion/SpringBootPage/AprendiendoPOOPage").then(m => ({ default: m.AprendiendoPOOPage })));
const AprendiendoSpringCorePage = lazy(() => import("./pages/Programacion/SpringBootPage/AprendiendoSpringCorePage").then(m => ({ default: m.AprendiendoSpringCorePage })));
const SpringBootPage = lazy(() => import("./pages/Programacion/SpringBootPage/SpringBootPage").then(m => ({ default: m.SpringBootPage })));
const PromptLibreInfoPage = lazy(() => import("./pages/Programacion/IAPage/PromptLibreInfoPage").then(m => ({ default: m.PromptLibreInfoPage })));
const AprendiendoOpenCodePage = lazy(() => import("./pages/Programacion/IAPage/AprendiendoOpenCodePage").then(m => ({ default: m.AprendiendoOpenCodePage })));
const AprendiendoPromptsPage = lazy(() => import("./pages/Programacion/IAPage/AprendiendoPromptsPage").then(m => ({ default: m.AprendiendoPromptsPage })));
const AprendiendoSkillsPage = lazy(() => import("./pages/Programacion/IAPage/AprendiendoSkillsPage").then(m => ({ default: m.AprendiendoSkillsPage })));
const ProyectosIAPage = lazy(() => import("./pages/Programacion/IAPage/ProyectosIAPage").then(m => ({ default: m.ProyectosIAPage })));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/modulosestaticos" element={<ModelosEstaticosPage />} />
        <Route path="/modulosdinamicos" element={<ModelosDinamicosPage />} />
        <Route path="/frontend" element={<FrontEndPage />} />
        <Route path="/aprendiendohtml" element={<AprendiendoHtmlPage />} />
        <Route path="/aprendiendocss" element={<AprendiendoCssPage />} />
        <Route path="/aprendiendojs" element={<AprendiendoJsPage />} />
        <Route path="/aprendiendobootstrap" element={<AprendiendoBootstrapPage />} />
        <Route path="/springbootinfo" element={<SpringBootInfoPage />} />
        <Route path="/aprendiendojava" element={<AprendiendoJavaPage />} />
        <Route path="/aprendiendopoo" element={<AprendiendoPOOPage />} />
        <Route path="/aprendiendospringcore" element={<AprendiendoSpringCorePage />} />
        <Route path="/springboot" element={<SpringBootPage />} />
        <Route path="/promptlibre" element={<PromptLibreInfoPage />} />
        <Route path="/aprendiendoopencode" element={<AprendiendoOpenCodePage />} />
        <Route path="/aprendiendoprompts" element={<AprendiendoPromptsPage />} />
        <Route path="/aprendiendoskills" element={<AprendiendoSkillsPage />} />
        <Route path="/proyectosia" element={<ProyectosIAPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
