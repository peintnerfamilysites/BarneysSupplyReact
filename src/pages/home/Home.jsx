import NavBar from "../../components/navigation/NavBar";
import ContactUs from "../../assets/contact-us.png";
import SpringTime from "../../assets/spring-time.png";
import OurPromise from "../../assets/our-promise.png";

function Home() {
  return (
    <div className="bg-black w-full min-h-screen overscroll-none">
      <NavBar />
      <div className="homepage flex flex-col items-center gap-2 pt-6 w-full">
        <div className="block md:hidden h-45 w-full overflow-hidden flex items-center justify-center">
          <img
            src={ContactUs}
            className="w-full h-full object-cover scale-90 cursor-pointer"
            alt="Contact Us button logo click to go to contact page"
          />
        </div>

        <div className="w-full flex flex-col gap-1 md:flex-row md:justify-center md:gap-12 md:max-w-7xl md:px-8">
          <img
            src={SpringTime}
            className="w-full h-auto object-contain md:max-w-3xl transition-all duration-300 cursor-pointer md:rounded-xl md:shadow-[0_0_15px_rgba(0,0,0,0.9),_0_0_30px_rgba(239,68,68,0.6),_0_0_50px_rgba(234,179,8,0.4)] hover:scale-[1.01] hover:md:shadow-[0_0_20px_rgba(0,0,0,0.9),_0_0_40px_rgba(239,68,68,0.9),_0_0_65px_rgba(234,179,8,0.7)]"
            alt="springtime deals in the ozarks"
          />

          <img
            src={OurPromise}
            className="w-full h-auto object-contain md:max-w-3xl transition-all duration-300 cursor-pointer md:rounded-xl md:shadow-[0_0_15px_rgba(0,0,0,0.9),_0_0_30px_rgba(239,68,68,0.6),_0_0_50px_rgba(234,179,8,0.4)] hover:scale-[1.01] hover:md:shadow-[0_0_20px_rgba(0,0,0,0.9),_0_0_40px_rgba(239,68,68,0.9),_0_0_65px_rgba(234,179,8,0.7)]"
            alt="Image of Barneys Supply goals for our service"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
