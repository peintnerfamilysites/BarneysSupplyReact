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
import PhoneNumbers from "../../assets/phone-numbers.webp";
import Established from "../../assets/established.webp";
import EmailUs from "../../assets/email-us.webp";
import Footer from "../../components/footer/Footer";
import Seo from "../../components/seo/Seo";

function Home() {
  // Shared base styles for the three core footer graphics
  const baseFooterImageClass = `
    h-auto object-contain 
    transition-all duration-300
    md:drop-shadow-[0_6px_12px_rgba(239,68,68,0.35)] 
  `.trim();

  // Reusable card outer border layout
  const cardOuterBorderClass = `
    w-full flex flex-col md:block relative group overflow-hidden rounded-xl 
    bg-gradient-to-r from-black via-red-600 to-yellow-500 p-[1px]
    shadow-lg transition-all duration-300 hover:scale-[1.02] 
    hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]
  `.trim();

  // Reusable card inner block content styling
  const cardInnerContainerClass =
    "w-full h-full bg-zinc-950 rounded-xl overflow-hidden relative";

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: "Barneys Supply Company",
    alternateName: "Barneys Supply",
    telephone: ["+14177254153", "+14174645794"],
    email: "BarneysSupplyCompany@gmail.com",
    priceRange: "$$",
    foundingDate: "1944",
    areaServed: [
      "Southwest Missouri",
      "The Ozarks",
      "Springfield, MO",
      "Nixa, MO",
      "Ozark, MO",
      "Branson, MO",
      "Republic, MO",
      "Bolivar, MO",
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: "MO",
      addressCountry: "US",
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Shingle Roofing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vinyl Siding",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Seamless Gutters",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Storm Damage Inspections",
        },
      },
    ],
    description:
      "Barneys Supply Company provides professional shingle roofing, vinyl siding, seamless gutters, storm damage diagnostics, and exterior construction services throughout Southwest Missouri and the Ozarks.",
  };

  return (
    <>
      <Seo
        title="Roofing, Siding & Seamless Gutters in the Ozarks"
        description="Barneys Supply Company provides shingle roofing, vinyl siding, seamless gutters, storm damage repairs, and exterior construction services across Southwest Missouri."
        path="/"
        schema={localBusinessSchema}
      />
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
        {/* Mobile Header Order Controller */}
        <div className="w-full flex flex-col items-center">
          {/* 1. Contact Us Banner (Shows 1st on mobile, hidden on desktop) */}
          <div className="block md:hidden h-45 w-full flex items-center justify-center order-1">
            <Link
              to="/contact"
              className="w-full h-full flex items-center justify-center"
            >
              <img
                src={ContactUs}
                className="w-full h-full object-cover scale-90 cursor-pointer"
                alt="Contact Us button"
                loading="lazy"
                decoding="async"
              />
            </Link>
          </div>

          {/* 2. SEO Headline Section (Shows 2nd on mobile, 1st on desktop) */}
          <div className="text-center mt-4 md:mt-6 mb-6 md:mb-12 max-w-2xl mx-auto px-4 order-2 md:order-first">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Premier Exterior Construction Services in{" "}
              <span className="text-red-500">the Ozarks</span>
            </h1>
            <p className="text-zinc-400 mt-2 text-sm md:text-base">
              From reliable shingle roofing repairs to custom seamless gutter
              systems, Barneys Supply has protected residential and commercial
              properties since 1944.
            </p>
          </div>
        </div>

        {/* Top 3 Graphic Banner Blocks - Removed cursor-pointer */}
        <div className="w-full flex flex-col gap-1 md:flex-row md:justify-center md:flex-wrap md:gap-x-4 md:gap-y-4 lg:gap-x-8 md:max-w-[96vw]">
          <img
            src={SpringTime}
            className="w-full h-auto object-contain md:w-[calc(50%-8px)] lg:w-[calc(50%-16px)] transition-all duration-300 md:rounded-xl md:shadow-[0_0_15px_rgba(0,0,0,0.9),_0_0_30px_rgba(239,68,68,0.6),_0_0_50px_rgba(234,179,8,0.4)] hover:scale-[1.01] hover:md:shadow-[0_0_20px_rgba(0,0,0,0.9),_0_0_40px_rgba(239,68,68,0.9),_0_0_65px_rgba(234,179,8,0.7)]"
            alt="springtime deals in the ozarks"
            loading="lazy"
            decoding="async"
          />
          <img
            src={OurPromise}
            className="w-full h-auto object-contain md:w-[calc(50%-8px)] lg:w-[calc(50%-16px)] transition-all duration-300 md:rounded-xl md:shadow-[0_0_15px_rgba(0,0,0,0.9),_0_0_30px_rgba(239,68,68,0.6),_0_0_50px_rgba(234,179,8,0.4)] hover:scale-[1.01] hover:md:shadow-[0_0_20px_rgba(0,0,0,0.9),_0_0_40px_rgba(239,68,68,0.9),_0_0_65px_rgba(234,179,8,0.7)]"
            alt="Barneys Supply Company exterior construction promise in Southwest Missouri"
            loading="lazy"
            decoding="async"
          />
          <img
            src={SomeServices}
            className="w-full h-auto object-contain md:w-[calc(50%-8px)] lg:w-[calc(50%-16px)] transition-all duration-300 md:rounded-xl md:shadow-[0_0_15px_rgba(0,0,0,0.9),_0_0_30px_rgba(239,68,68,0.6),_0_0_50px_rgba(234,179,8,0.4)] hover:scale-[1.01] hover:md:shadow-[0_0_20px_rgba(0,0,0,0.9),_0_0_40px_rgba(239,68,68,0.9),_0_0_65px_rgba(234,179,8,0.7)]"
            alt="Barneys Supply Company roofing siding gutter and exterior services"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Lower Main Content and Services Area */}
        <div className="text-white w-full flex flex-col items-center mt-4 px-4 animate-fade-in-up">
          <Link to="/services" className="w-full flex justify-center">
            <img
              src={ServicesOffered}
              className="max-w-[60%] md:max-w-xs h-auto object-contain mb-6 transition-all duration-300 cursor-pointer 
                md:drop-shadow-[0_0_10px_rgba(239,68,68,0.5)] 
                hover:scale-[1.02] 
                hover:md:drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]"
              alt="Services we offer for roofing siding gutters and storm damage"
              loading="lazy"
              decoding="async"
            />
          </Link>

          {/* Grid setup for full-width content mapping with a maximum cap of 3 elements per line */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 w-full max-w-[96vw] justify-items-center">
            {/* Card 1: Shingle Roofing */}
            <div className={cardOuterBorderClass}>
              <div className={cardInnerContainerClass}>
                <div className="relative w-full">
                  <img
                    src={ShingleRoofing}
                    alt="Shingle roofing installation and repair service"
                    className="w-full h-auto object-contain block opacity-90 md:opacity-70 group-hover:md:opacity-90 transition-opacity duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>
                <div className="p-4 bg-zinc-950 md:bg-transparent md:absolute md:inset-0 md:p-5 flex flex-col justify-end z-10">
                  <div className="text-red-500 mb-1.5 md:mb-1 transition-transform duration-300 group-hover:md:-translate-y-1">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide md:drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    Shingle Roofing
                  </h3>
                  <p className="text-zinc-400 md:text-zinc-300 text-sm md:text-xs mt-1 md:mt-0.5 opacity-100 md:opacity-0 group-hover:md:opacity-100 max-h-none md:max-h-0 group-hover:md:max-h-12 transition-all duration-300 ease-out md:drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                    Expert installation, architectural shingles, and leak
                    repairs.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Vinyl Siding */}
            <div className={cardOuterBorderClass}>
              <div className={cardInnerContainerClass}>
                <div className="relative w-full">
                  <img
                    src={VinylSiding}
                    alt="Premium vinyl siding installation service"
                    className="w-full h-auto object-contain block opacity-90 md:opacity-70 group-hover:md:opacity-90 transition-opacity duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>
                <div className="p-4 bg-zinc-950 md:bg-transparent md:absolute md:inset-0 md:p-5 flex flex-col justify-end z-10">
                  <div className="text-amber-500 mb-1.5 md:mb-1 transition-transform duration-300 group-hover:md:-translate-y-1">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0V11m0 0h4m-4 0m4 0v10m-4-10a1 1 0 011-1h2a1 1 0 011 1m-4 6h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide md:drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    Vinyl Siding
                  </h3>
                  <p className="text-zinc-400 md:text-zinc-300 text-sm md:text-xs mt-1 md:mt-0.5 opacity-100 md:opacity-0 group-hover:md:opacity-100 max-h-none md:max-h-0 group-hover:md:max-h-12 transition-all duration-300 ease-out md:drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                    Durable, weather-resistant siding styles to protect your
                    home.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Seamless Gutters */}
            <div className={cardOuterBorderClass}>
              <div className={cardInnerContainerClass}>
                <div className="relative w-full">
                  <img
                    src={Gutters}
                    alt="Custom seamless gutter installation service"
                    className="w-full h-auto object-contain block opacity-90 md:opacity-70 group-hover:md:opacity-90 transition-opacity duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>
                <div className="p-4 bg-zinc-950 md:bg-transparent md:absolute md:inset-0 md:p-5 flex flex-col justify-end z-10">
                  <div className="text-red-500 mb-1.5 md:mb-1 transition-transform duration-300 group-hover:md:-translate-y-1">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide md:drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                    Seamless Gutters
                  </h3>
                  <p className="text-zinc-400 md:text-zinc-300 text-sm md:text-xs mt-1 md:mt-0.5 opacity-100 md:opacity-0 group-hover:md:opacity-100 max-h-none md:max-h-0 group-hover:md:max-h-12 transition-all duration-300 ease-out md:drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                    Custom downspouts and gutter guard protection systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="block md:hidden max-w-[160px] w-full mx-auto mt-6">
            <a href="tel:14177254153">
              <img
                src={CallUs}
                className="w-full h-auto object-contain cursor-pointer"
                alt="Call Barneys Supply Company for an exterior construction estimate"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>

          {/* Desktop Footer Section */}
          <div className="hidden md:flex items-center justify-between mt-6 w-full max-w-[96vw] px-4 md:px-6 lg:px-12">
            {/* Call Us */}
            <div className="w-1/4 max-w-[280px] relative">
              <img
                src={PhoneNumbers}
                className={baseFooterImageClass}
                alt="Contact Barneys Supply - Call our team today"
                loading="lazy"
                decoding="async"
              />
              <div className="sr-only">
                <h2>Contact Barneys Supply</h2>
                <p>
                  Call our exterior construction experts for shingle roofing,
                  vinyl siding, and seamless gutters.
                </p>
                <ul>
                  <li>
                    Main Office: <a href="tel:+14177254153">(417) 725-4153</a>
                  </li>
                  <li>
                    Sales: <a href="tel:+14174645794">(417) 464-5794</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Email Us */}
            <div className="w-[35%] max-w-[440px] relative">
              <Link to="/contact" className="block w-full h-full">
                <img
                  src={EmailUs}
                  className={`${baseFooterImageClass} cursor-pointer hover:scale-[1.04] hover:md:drop-shadow-[0_6px_25px_rgba(234,179,8,0.7)]`}
                  alt="Email Barneys Supply for a free exterior construction estimate"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
              <div className="sr-only">
                <p>
                  Send an email to request a free quote on roofing repairs,
                  siding installations, seamless gutter systems, or storm damage repairs.
                </p>
                <a href="mailto:BarneysSupplyCompany@gmail.com">
                  BarneysSupplyCompany@gmail.com
                </a>
              </div>
            </div>

            {/* Established in 1944 */}
            <div className="w-[35%] max-w-[440px] relative">
              <img
                src={Established}
                className={baseFooterImageClass}
                alt="Barneys Supply - Established in 1944"
                loading="lazy"
                decoding="async"
              />
              <div className="sr-only">
                <p>
                  Barneys Supply has been proudly serving our community with
                  premier commercial and residential exterior construction
                  solutions since 1944.
                </p>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
