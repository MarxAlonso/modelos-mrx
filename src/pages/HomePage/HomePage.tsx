import { Footer } from "../../common/Footer/Footer";
import { Navbar } from "../../common/Header/Navbar";
import { FAQSection } from "../../common/Home/FAQSection";
import { Home, InfoInicio } from "../../common/Home/Home";

const bgStyle = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};
export const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <div style={bgStyle}>
        <Navbar />
      </div>
      <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white">
        <Home />
        <InfoInicio />
        <FAQSection />
        <Footer />
      </div>  
    </div>
  );
};