import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import PageShell from "../../components/page/PageShell";
import { routeSeo } from "../../config/seo";
import { gradientCardBorderClass } from "../../styles/classNames";
import { structuralServices } from "./data/servicesData.jsx";

function Services() {
  return (
    <PageShell seo={routeSeo.services}>
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
              className={gradientCardBorderClass}
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


        <Footer />
    </PageShell>
  );
}

export default Services;
