import logo from "../assets/logo.png";
import Hero from "./Hero";
import Hero2 from "./Hero2";
import Products from "./Products";
import Footer from "./Footer";

function Main() {
  return (
    <>
      <div className="flex flex-col w-full bg-[#146EB4] h-[220px]">
        {/* Navbar */}
        <div className="flex justify-between pt-6 mx-28">
          <div>
            <img src={logo} alt="/" />
          </div>

          <div className="flex">
            <div>
              <p className="mr-5 text-white"> Sign In</p>
            </div>
            <div>
              <p className="bg-white rounded px-2 py-1 text-[#146EB4]">
                Dukaan for Pc
              </p>
            </div>
          </div>
        </div>

        {/* HeroSection */}
        <Hero />

        {/* Search, Select, StandOut */}
        <Hero2 />

        {/* Try our other free products */}
        <Products />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default Main;
