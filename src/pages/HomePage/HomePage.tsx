import { Footer } from "../../common/Footer/Footer";
import { Navbar } from "../../common/Header/Navbar";
import { FAQSection } from "../../common/Home/FAQSection";
import { Home, InfoInicio } from "../../common/Home/Home";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      {/* el hero va fuera del contenedor con recorte: sale a sangre bajo el rail */}
      <Home />
      <div className="overflow-x-clip bg-gradient-to-b from-black via-gray-900 to-black text-white">
        <InfoInicio />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
};
