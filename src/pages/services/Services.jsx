import { Link } from "react-router-dom";
import NavBar from "../../components/navigation/NavBar";
import PfsFooter from "../../assets/pfs-footer.webp";

function Services() {
  // Reusable outer card gradient border (Matches Home, About, and Contact layouts)
  const cardOuterBorderClass = `
    w-full relative group overflow-hidden rounded-xl 
    bg-gradient-to-r from-black via-red-600 to-yellow-500 p-[1px]
    shadow-lg transition-all duration-300 hover:scale-[1.01] 
    hover:shadow-[0_0_30px_rgba(239,68,68,0.25)]
  `.trim();

  // Unified data array for your primary exterior services
  const structuralServices = [
    {
      id: "roofing",
      title: "Shingle Roofing Systems",
      subtitle: "Storm Diagnostics & Full Replacements",
      description:
        "Ozark weather demands uncompromising structural defense. We specialize in high-grade architectural shingle installations engineered to withstand severe wind, heavy impact, and sudden temperature shifts.",
      features: [
        "Advanced Storm Damage Diagnostics",
        "Premium Architectural Shingle Options",
        "Leak Prevention & Decking Reinforcement",
        "Full Clean-Up & Property Protection",
      ],
      icon: (
        <svg
          className="w-6 h-6 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3m10-11v11a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      id: "siding",
      title: "Premium Vinyl Siding",
      subtitle: "Insulated Energy Efficiency & Profiles",
      description:
        "Transform your home's exterior profile while slashing seasonal utility overhead. Our premium vinyl siding systems deliver zero-maintenance longevity, deep weather-resistance, and immaculate curb appeal.",
      features: [
        "Heavy-Gauge Impact Resistance",
        "Advanced Thermal Insulation Layers",
        "Dozens of Fade-Resistant Colorways",
        "Professional Structural Wrapping",
      ],
      icon: (
        <svg
          className="w-6 h-6 text-yellow-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
    {
      id: "gutters",
      title: "Seamless Gutter Systems",
      subtitle: "Precision Water Management & Guarding",
      description:
        "Defend your concrete foundation and perimeter fascia from heavy downpour pooling. We form custom seamless aluminum gutters directly on-site to guarantee an exact, leak-proof architectural fit.",
      features: [
        "On-Site Seamless Extrusion",
        "Heavy-Duty Hidden Hangers",
        "High-Capacity Downspout Routing",
        "Leaf & Debris Guarding Add-ons",
      ],
      icon: (
        <svg
          className="w-6 h-6 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-gradient-to-bl from-black md:via-black md:via-50% via-red-950 to-amber-950 min-h-screen pb-4 md:pb-8">
      {/* Fluid entry animation matching the style guide */}
      <style>
        {`
          @keyframes fluidFadeUp {
            0% { opacity: 0; transform: translateY(16px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            opacity: 0;
            animation: fluidFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}
      </style>

      <NavBar />

      <div className="flex flex-col items-center gap-1 pt-2 w-full animate-fade-in-up">
        {/* ================= HERO INTRO ================= */}
        <div className="w-full max-w-[96vw] px-4 mt-6 md:mt-8 mb-8 text-center md:text-left">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Professional Exterior{" "}
              <span className="text-red-500">Solutions</span>
            </h1>
            <p className="text-zinc-400 mt-4 text-sm md:text-lg leading-relaxed">
              Backed by our 80-plus-year legacy in Southwest Missouri, Barneys
              Supply pairs industry-leading materials with expert installation
              techniques to secure your primary property investment.
            </p>
          </div>
        </div>

        {/* ================= DETAILED SERVICE CARDS LOOP ================= */}
        <div className="w-full max-w-[96vw] px-4 flex flex-col gap-6 md:gap-8 mb-8">
          {structuralServices.map(service => (
            <div
              key={service.id}
              id={service.id}
              className={cardOuterBorderClass}
            >
              <div className="w-full h-full bg-zinc-950 rounded-xl p-6 md:p-8 lg:p-10">
                {/* Header Configuration */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-900 pb-4 mb-6 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                        {service.title}
                      </h2>
                      <p className="text-xs md:text-sm text-zinc-500 font-medium tracking-wide mt-0.5">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <div>
                    <Link
                      to="/contact"
                      className="inline-block w-full sm:w-auto text-center px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-300 font-semibold rounded-md text-xs uppercase tracking-wider hover:border-red-600/60 hover:text-white transition-all active:scale-95"
                    >
                      Quote This Service
                    </Link>
                  </div>
                </div>

                {/* Content Breakdown Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                  <div className="lg:col-span-7 text-zinc-400 text-sm md:text-base leading-relaxed flex flex-col justify-center">
                    <p>{service.description}</p>
                  </div>

                  {/* Bulleted Capabilities Grid */}
                  <div className="lg:col-span-5 bg-zinc-900/40 rounded-xl border border-zinc-900/60 p-5 md:p-6 flex flex-col justify-center">
                    <h4 className="text-xs uppercase font-bold tracking-widest text-zinc-500 mb-3">
                      What We Handle
                    </h4>
                    <ul className="space-y-2.5 text-xs md:text-sm font-medium text-zinc-300">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <span className="text-yellow-500 mt-0.5 select-none">
                            ✓
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= MATERIAL VETTING ROW ================= */}
        <div className="w-full max-w-[96vw] px-4 text-center mb-8">
          <p className="text-xs uppercase tracking-widest font-bold text-zinc-600">
            Engineered to Last • Certified Architectural Products • Handled
            Locally Since 1944
          </p>
        </div>

        {/* ================= CONVERSION / FOOTER BANNER ================= */}
        <div className="w-full max-w-[96vw] px-4 mb-6">
          <div className="bg-zinc-950/40 border border-zinc-900/80 rounded-xl p-8 text-center backdrop-blur-xs">
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
              Not Sure Which System Needs Attention?
            </h3>
            <p className="text-zinc-400 text-sm max-w-xl mx-auto mt-2 mb-6 leading-relaxed">
              Our regional diagnostic professionals will map out a transparent,
              comprehensive condition overview at zero cost to you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="tel:+14177254153"
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-red-700 to-red-800 text-white font-bold rounded-lg text-sm uppercase tracking-wider hover:from-red-600 hover:to-red-700 transition-all text-center shadow-md active:scale-95 border border-red-500/20"
              >
                Call Office: (417) 725-4153
              </a>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 text-zinc-300 font-bold rounded-lg text-sm uppercase tracking-wider hover:border-yellow-500/50 hover:text-white transition-all text-center active:scale-95"
              >
                Book Free Assessment
              </Link>
            </div>
          </div>
        </div>

        {/* ================= BRANDING ELEMENT (FIXED & ANIMATED) ================= */}
        <div className="w-full flex justify-center md:justify-end md:pr-12 mt-4 md:mt-0">
          <img
            src={PfsFooter}
            className="w-2/5 md:w-1/4 h-auto object-contain cursor-pointer transition-all duration-300 scale-75 hover:scale-100 filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)] hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]"
            alt="PFS Footer representation"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
