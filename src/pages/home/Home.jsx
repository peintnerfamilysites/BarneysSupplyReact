import { Link } from "react-router-dom";
import NavBar from "../../components/navigation/NavBar";
import ContactUs from "../../assets/contact-us.webp";
import SpringTime from "../../assets/spring-time.webp";
import OurPromise from "../../assets/our-promise.webp";
import SomeServices from "../../assets/some-services.webp";
import ServicesOffered from "../../assets/services-offered.webp";
import ShingleRoofing from "../../assets/shingle-roofing.webp";
import VinylSiding from "../../assets/vinyl-siding.webp";
import CallUs from "../../assets/call-us.webp";
import Gutters from "../../assets/gutters.webp";
import GarageDoors from "../../assets/garage-doors.webp";
import PhoneNumbers from "../../assets/phone-numbers.webp";
import Established from "../../assets/established.webp";
import EmailUs from "../../assets/email-us.webp";
import PfsFooter from "../../assets/pfs-footer.webp";

function Home() {
  const serviceWrapperClass =
    "w-full md:w-[calc(33.33%-16px)] p-[2px] bg-gradient-to-r from-black via-red-500 to-yellow-500 md:bg-none md:p-0";

  const baseFooterImageClass = `
    h-auto object-contain 
    transition-all duration-300
    md:drop-shadow-[0_6px_12px_rgba(239,68,68,0.35)] 
    hover:scale-[1.04] 
    hover:md:drop-shadow-[0_6px_25px_rgba(234,179,8,0.7)]
    cursor-pointer
  `.trim();

  return (
    <div className="bg-gradient-to-bl from-black md:via-black md:via-50% via-red-950 to-amber-950 min-h-screen pb-4 md:pb-8">
      <style>
        {`
          @keyframes fluidFadeUp {
            0% {
              opacity: 0;
              transform: translateY(16px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in-up {
            opacity: 0;
            animation: fluidFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}
      </style>

      <NavBar />

      <div className="flex flex-col items-center gap-1 pt-2 w-full">
        <div className="block md:hidden h-45 w-full flex items-center justify-center animate-fade-in-up">
          <img
            src={ContactUs}
            className="w-full h-full object-cover scale-90 cursor-pointer"
            alt="Contact Us button"
          />
        </div>

        {/* Content chunks fade up smoothly together rather than piece-by-piece */}
        <div className="w-full flex flex-col gap-1 md:flex-row md:justify-center md:flex-wrap md:gap-x-4 md:gap-y-4 lg:gap-x-8 md:max-w-[96vw] animate-fade-in-up">
          <img
            src={SpringTime}
            className="w-full h-auto object-contain md:w-[calc(50%-8px)] lg:w-[calc(50%-16px)] transition-all duration-300 cursor-pointer md:rounded-xl md:shadow-[0_0_15px_rgba(0,0,0,0.9),_0_0_30px_rgba(239,68,68,0.6),_0_0_50px_rgba(234,179,8,0.4)] hover:scale-[1.01] hover:md:shadow-[0_0_20px_rgba(0,0,0,0.9),_0_0_40px_rgba(239,68,68,0.9),_0_0_65px_rgba(234,179,8,0.7)]"
            alt="springtime deals in the ozarks"
          />
          <img
            src={OurPromise}
            className="w-full h-auto object-contain md:w-[calc(50%-8px)] lg:w-[calc(50%-16px)] transition-all duration-300 cursor-pointer md:rounded-xl md:shadow-[0_0_15px_rgba(0,0,0,0.9),_0_0_30px_rgba(239,68,68,0.6),_0_0_50px_rgba(234,179,8,0.4)] hover:scale-[1.01] hover:md:shadow-[0_0_20px_rgba(0,0,0,0.9),_0_0_40px_rgba(239,68,68,0.9),_0_0_65px_rgba(234,179,8,0.7)]"
            alt="Our Promise"
          />
          <img
            src={SomeServices}
            className="w-full h-auto object-contain md:w-[calc(50%-8px)] lg:w-[calc(50%-16px)] transition-all duration-300 cursor-pointer md:rounded-xl md:shadow-[0_0_15px_rgba(0,0,0,0.9),_0_0_30px_rgba(239,68,68,0.6),_0_0_50px_rgba(234,179,8,0.4)] hover:scale-[1.01] hover:md:shadow-[0_0_20px_rgba(0,0,0,0.9),_0_0_40px_rgba(239,68,68,0.9),_0_0_65px_rgba(234,179,8,0.7)]"
            alt="Services Image"
          />
        </div>

        <div className="text-white w-full flex flex-col items-center mt-4 px-4 animate-fade-in-up">
          <Link to="/services" className="w-full flex justify-center">
            <img
              src={ServicesOffered}
              className="max-w-[60%] md:max-w-xs h-auto object-contain mb-2 transition-all duration-300 cursor-pointer 
                md:drop-shadow-[0_0_10px_rgba(239,68,68,0.5)] 
                hover:scale-[1.02] 
                hover:md:drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]"
              alt="Services we offer."
            />
          </Link>

          <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4 w-full max-w-[96vw]">
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
                src={Gutters}
                className="w-full h-auto object-contain transition-all duration-300 cursor-pointer md:rounded-xl md:shadow-[0_0_15px_rgba(0,0,0,0.9),_0_0_30px_rgba(239,68,68,0.6),_0_0_50px_rgba(234,179,8,0.4)] hover:scale-[1.01] hover:md:shadow-[0_0_20px_rgba(0,0,0,0.9),_0_0_40px_rgba(239,68,68,0.9),_0_0_65px_rgba(234,179,8,0.7)]"
                alt="gutters service image"
              />
            </div>
            <div className={serviceWrapperClass}>
              <img
                src={GarageDoors}
                className="w-full h-auto object-contain transition-all duration-300 cursor-pointer md:rounded-xl md:shadow-[0_0_15px_rgba(0,0,0,0.9),_0_0_30px_rgba(239,68,68,0.6),_0_0_50px_rgba(234,179,8,0.4)] hover:scale-[1.01] hover:md:shadow-[0_0_20px_rgba(0,0,0,0.9),_0_0_40px_rgba(239,68,68,0.9),_0_0_65px_rgba(234,179,8,0.7)]"
                alt="garage doors service image"
              />
            </div>
          </div>

          <div className="block md:hidden max-w-[160px] w-full mx-auto mt-4">
            <a href="tel:19034177043">
              <img
                src={CallUs}
                className="w-full h-auto object-contain cursor-pointer"
                alt="Call us"
              />
            </a>
          </div>

          {/* Footers sit grounded and still until user actions occur */}
          <div className="hidden md:flex items-center justify-between mt-8 w-full max-w-[96vw] px-4 md:px-6 lg:px-12">
            <img
              src={PhoneNumbers}
              className={`${baseFooterImageClass} w-1/4 max-w-[280px]`}
              alt="Phone numbers"
            />
            <img
              src={EmailUs}
              className={`${baseFooterImageClass} w-[35%] max-w-[440px]`}
              alt="Email us"
            />
            <img
              src={Established}
              className={`${baseFooterImageClass} w-[35%] max-w-[440px]`}
              alt="Established status"
            />
          </div>

          <div className="w-full flex justify-center md:justify-end md:pr-12 mt-4 md:mt-0">
            <img
              src={PfsFooter}
              className="w-2/5 md:w-1/4 h-auto object-contain cursor-pointer transition-all duration-300 scale-100 hover:scale-[1.04] filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)] hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]"
              alt="PFS Footer image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
