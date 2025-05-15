import { Footer } from "../../common/Footer/Footer";
import { Navbar } from "../../common/Header/Navbar";
import { ModulosDinamicos } from "../../common/ModulosDinamicos/ModulosDinamicos";

const bgStyle = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

export const ModelosDinamicosPage = () => {
    return (
        <div className="overflow-x-hidden">
          <div style={bgStyle}>
            <Navbar />
          </div>
          <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white">
            <ModulosDinamicos />
            <Footer />
          </div>  
        </div>
      );
}