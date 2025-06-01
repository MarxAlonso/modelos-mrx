import { Footer } from "../../../common/Footer/Footer";
import { Navbar } from "../../../common/Header/Navbar";
import { FrontEndInfo, FrontEndDescripcion } from "../../../common/Programacion/FrontEnd/FrontEndInfo";

const bgStyle = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

export const FrontEndPage = () => {
    return (
        <div className="overflow-x-hidden">
          <div style={bgStyle}>
            <Navbar />
          </div>
          <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white">
            <FrontEndInfo />
            <FrontEndDescripcion />
            <Footer />
          </div>  
        </div>
      );
}