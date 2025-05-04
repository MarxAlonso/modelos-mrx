import { Footer } from "../../common/Footer/Footer";
import { Navbar } from "../../common/Header/Navbar";
import { Home } from "../../common/Home/Home";

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
      <Home />
      <Footer />
    </div>
  );
};