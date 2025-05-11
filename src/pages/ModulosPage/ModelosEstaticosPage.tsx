import { Footer } from "../../common/Footer/Footer";
import { Navbar } from "../../common/Header/Navbar";
import { ModulosEstaticos } from "../../common/ModulosEstaticos/ModulosEstaticos";

const bgStyle = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};
export const ModelosEstaticosPage = () => {
  return (
    <div className="overflow-x-hidden">
      <div style={bgStyle}>
        <Navbar />
      </div>
      <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white">
        <ModulosEstaticos />
        <Footer />
      </div>  
    </div>
  );
};