import NavBar from "../../components/navigation/NavBar";
import ContactUs from "../../assets/contact-us.png";
import SpringTime from "../../assets/spring-time.png";
import OurPromise from "../../assets/our-promise.png";
import SomeServices from "../../assets/some-services.png";
import ServicesOffered from "../../assets/services-offered.png";
import ShingleRoofing from "../../assets/shingle-roofing.png";
import VinylSiding from "../../assets/vinyl-siding.png";
import CallUs from "../../assets/call-us.png";

function Home() {
  const serviceWrapperClass =
    "w-full md:w-[calc(33.33%-22px)] p-[2px] bg-gradient-to-r from-black via-red-500 to-yellow-500 md:bg-none md:p-0";

  return (
    <div className="bg-gradient-to-bl from-black md:via-black md:via-50% via-red-950 to-amber-950 min-h-screen pb-4 md:pb-12">
      <NavBar />
      <div className="flex flex-col items-center gap-2 pt-6 w-full">
        <div className="block md:hidden h-45 w-full flex items-center justify-center">
          <img
            src={ContactUs}
            className="w-full h-full object-cover scale-90 cursor-pointer"
            alt="Contact Us button logo click to go to contact page"
          />
        </div>

        <div className="w-full flex flex-col gap-1 md:flex-row md:justify-center md:flex-wrap md:gap-x-8 md:gap-y-6 lg:gap-x-16 md:max-w-[92vw]">
          <img
            src={SpringTime}
            className="w-full h-auto object-contain md:w-[calc(50%-16px)] lg:w-[calc(50%-32px)] transition-all duration-300 cursor-pointer md:rounded-xl md:shadow-[0_0_15px_rgba(0,0,0,0.9),_0_0_30px_rgba(239,68,68,0.6),_0_0_50px_rgba(234,179,8,0.4)] hover:scale-[1.01] hover:md:shadow-[0_0_20px_rgba(0,0,0,0.9),_0_0_40px_rgba(239,68,68,0.9),_0_0_65px_rgba(234,179,8,0.7)]"
            alt="springtime deals in the ozarks"
          />

          <img
            src={OurPromise}
            className="w-full h-auto object-contain md:w-[calc(50%-16px)] lg:w-[calc(50%-32px)] transition-all duration-300 cursor-pointer md:rounded-xl md:shadow-[0_0_15px_rgba(0,0,0,0.9),_0_0_30px_rgba(239,68,68,0.6),_0_0_50px_rgba(234,179,8,0.4)] hover:scale-[1.01] hover:md:shadow-[0_0_20px_rgba(0,0,0,0.9),_0_0_40px_rgba(239,68,68,0.9),_0_0_65px_rgba(234,179,8,0.7)]"
            alt="Image of Barneys Supply goals for our service"
          />

          <img
            src={SomeServices}
            className="w-full h-auto object-contain md:w-[calc(50%-16px)] lg:w-[calc(50%-32px)] transition-all duration-300 cursor-pointer md:rounded-xl md:shadow-[0_0_15px_rgba(0,0,0,0.9),_0_0_30px_rgba(239,68,68,0.6),_0_0_50px_rgba(234,179,8,0.4)] hover:scale-[1.01] hover:md:shadow-[0_0_20px_rgba(0,0,0,0.9),_0_0_40px_rgba(239,68,68,0.9),_0_0_65px_rgba(234,179,8,0.7)]"
            alt="Services Image"
          />
        </div>

        <div className="text-white w-full flex flex-col items-center mt-6 px-4">
          <img
            src={ServicesOffered}
            className="max-w-[60%] md:max-w-xs h-auto object-contain mb-4"
            alt="Services we offer."
          />

          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 w-full max-w-[92vw]">
            <div className={serviceWrapperClass}>
              <img
                src={ShingleRoofing}
                className="w-full h-auto object-contain transition-all duration-300 cursor-pointer md:rounded-xl md:shadow-[0_0_15px_rgba(0,0,0,0.9),_0_0_30px_rgba(239,68,68,0.6),_0_0_50px_rgba(234,179,8,0.4)] hover:scale-[1.01] hover:md:shadow-[0_0_20px_rgba(0,0,0,0.9),_0_0_40px_rgba(239,68,68,0.9),_0_0_65px_rgba(234,179,8,0.7)]"
                alt="shingle roofing service image"
              />
            </div>

            <div className={serviceWrapperClass}>
              <img
                src={VinylSiding}
                className="w-full h-auto object-contain transition-all duration-300 cursor-pointer md:rounded-xl md:shadow-[0_0_15px_rgba(0,0,0,0.9),_0_0_30px_rgba(239,68,68,0.6),_0_0_50px_rgba(234,179,8,0.4)] hover:scale-[1.01] hover:md:shadow-[0_0_20px_rgba(0,0,0,0.9),_0_0_40px_rgba(239,68,68,0.9),_0_0_65px_rgba(234,179,8,0.7)]"
                alt="vinyl siding service image"
              />
            </div>

            <div className={serviceWrapperClass}>
              <img
                src={ShingleRoofing}
                className="w-full h-auto object-contain transition-all duration-300 cursor-pointer md:rounded-xl md:shadow-[0_0_15px_rgba(0,0,0,0.9),_0_0_30px_rgba(239,68,68,0.6),_0_0_50px_rgba(234,179,8,0.4)] hover:scale-[1.01] hover:md:shadow-[0_0_20px_rgba(0,0,0,0.9),_0_0_40px_rgba(239,68,68,0.9),_0_0_65px_rgba(234,179,8,0.7)]"
                alt="placeholder third service image"
              />
            </div>
          </div>

          <div className="block md:hidden max-w-[160px] w-full mx-auto mt-4">
            <a href="tel:19034177043">
              <img
                src={CallUs}
                className="w-full h-auto object-contain cursor-pointer"
                alt="Call us image"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
