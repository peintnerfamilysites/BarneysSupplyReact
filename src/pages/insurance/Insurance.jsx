import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import PageShell from "../../components/page/PageShell";
import { routeSeo } from "../../config/seo";
import { gradientCardBorderClass } from "../../styles/classNames";
import {
  getCalculatorGuidance,
  insuranceFrictionPoints,
} from "./data/insuranceData";

function Insurance() {
  const [damageType, setDamageType] = useState("hail");
  const [roofAge, setRoofAge] = useState(12);
  const [claimStatus, setClaimStatus] = useState("not_filed");

  const guidance = getCalculatorGuidance({ damageType, roofAge, claimStatus });

  return (
    <PageShell seo={routeSeo.insurance}>
      {/* ================= HERO HEADLINE ================= */}
      <div className="w-full max-w-[96vw] px-4 mt-6 md:mt-8 mb-6 md:mb-10 text-center md:text-left">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Struggling with <span className="text-red-500">Storm Claims?</span>
          </h1>
          <p className="text-zinc-400 mt-4 text-sm md:text-lg leading-relaxed">
            Dealing with storm damage is stressful enough—you shouldn't have to
            battle insurance adjusters alone. Barneys Supply stands between you
            and the paperwork to make sure your home gets the full coverage it
            deserves.
          </p>
        </div>
      </div>

      {/* ================= SECTION: THE INSIDE CHALLENGES ================= */}
      <div className="w-full max-w-[96vw] px-4 mb-8">
        <div className={gradientCardBorderClass}>
          <div className="w-full h-full bg-zinc-950 rounded-xl p-6 md:p-10">
            <div className="border-b border-zinc-900 pb-4 mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                Why Insurance Claims Are Deceptive
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {insuranceFrictionPoints.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-zinc-900/30 rounded-lg border border-zinc-900/60 flex flex-col gap-2"
                >
                  <span className="text-xs font-bold text-yellow-500 uppercase tracking-widest">
                    Friction Point 0{idx + 1}
                  </span>
                  <h3 className="text-white font-bold text-base md:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mt-1">
                    {item.problem}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= HOW WE FIGHT FOR YOU ================= */}
      <div className="w-full max-w-[96vw] px-4 grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        {/* Card left: Detailed Advocacy */}
        <div className="p-6 md:p-8 bg-zinc-950/80 backdrop-blur-sm rounded-xl border border-zinc-900/80 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-white mb-3">
            We Speak Adjuster Language
          </h3>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-4">
            Since 1944, we've cataloged, mapped, and executed roofing and siding
            replacements across the Ozarks. We don't guess at damage metric
            specs—we supply your carrier with undeniable, photographic
            structural proof and line-item estimates that prevent arbitrary
            coverage deductions.
          </p>
          <div className="space-y-2 text-xs md:text-sm text-zinc-300 font-semibold">
            <div className="flex items-center gap-2">
              <span className="text-red-500">✓</span> Complete structural
              diagnostic documentation
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-500">✓</span> Direct adjustments
              detailing accurate local material pricing
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-500">✓</span> Strict code-compliance
              verification items
            </div>
          </div>
        </div>

        {/* Card right: Step-by-Step Guide */}
        <div className="p-6 md:p-8 bg-zinc-950/40 rounded-xl border border-zinc-900/60">
          <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">
            Our Blueprint For Your Claim
          </h4>

          <div className="space-y-4">
            {[
              {
                step: "01",
                label: "Free Diagnostic Inspection",
                text: "We inspect your shingle rows, vinyl siding panels, and seamless gutters to build a structural evidence report.",
              },
              {
                step: "02",
                label: "File and Submit Evidence",
                text: "You file the claim with your carrier, backed directly by our granular line-by-line physical property documentation.",
              },
              {
                step: "03",
                label: "Adjuster Alignment Meeting",
                text: "We meet your insurance representative out on the property asset site to ensure all framing and underlying problems are approved.",
              },
            ].map((proc, pIdx) => (
              <div key={pIdx} className="flex gap-4 items-start">
                <div className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800">
                  {proc.step}
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white">{proc.label}</h5>
                  <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">
                    {proc.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= INTERACTIVE CLAIMS CALCULATOR WIDGET ================= */}
      <div className="w-full max-w-[96vw] px-4 mb-8">
        <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-6 md:p-8 shadow-inner">
          <h3 className="text-lg md:text-xl font-bold text-white mb-2">
            Interactive Claims Blueprint Assistant
          </h3>
          <p className="text-zinc-500 text-xs md:text-sm mb-6 leading-relaxed">
            Input your specific project tracking info below to instantly build a
            localized compliance checklist and target action sequence.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Form Inputs */}
            <div className="lg:col-span-5 space-y-4 bg-zinc-900/20 p-5 rounded-lg border border-zinc-900/80">
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-zinc-400 mb-2">
                  Visible Damage Profile
                </label>
                <select
                  value={damageType}
                  onChange={e => setDamageType(e.target.value)}
                  className="w-full bg-zinc-900 text-zinc-100 border border-zinc-800 rounded px-3 py-2 text-sm focus:outline-hidden focus:border-red-600"
                >
                  <option value="hail">Hail Fractures / Dimples</option>
                  <option value="wind">Torn / Missing Shingle Sections</option>
                  <option value="tree">Heavy Tree Limb Impact</option>
                  <option value="leak">Active Ceiling Interior Leak</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between text-xs uppercase font-bold tracking-wider text-zinc-400 mb-2">
                  <span>Approximate Roof Age</span>
                  <span className="text-yellow-500 font-mono">
                    {roofAge} Years
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="30"
                  value={roofAge}
                  onChange={e => setRoofAge(e.target.value)}
                  className="w-full accent-red-600 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-zinc-400 mb-2">
                  Current Claim Footprint
                </label>
                <select
                  value={claimStatus}
                  onChange={e => setClaimStatus(e.target.value)}
                  className="w-full bg-zinc-900 text-zinc-100 border border-zinc-800 rounded px-3 py-2 text-sm focus:outline-hidden focus:border-red-600"
                >
                  <option value="not_filed">
                    Not Filed with Insurance Yet
                  </option>
                  <option value="waiting">
                    Filed - Awaiting On-Site Adjuster
                  </option>
                  <option value="denied">
                    Claim Denied / Underpaid Allocation
                  </option>
                </select>
              </div>
            </div>

            {/* Right Column - Realtime Dynamic Feedback Output */}
            <div className="lg:col-span-7 bg-zinc-900/40 rounded-xl border border-zinc-900 p-5 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center border-b border-zinc-900 pb-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                    System Blueprint Output
                  </span>
                  <span
                    className={`text-xs font-black tracking-wide uppercase px-2.5 py-0.5 bg-black/60 rounded border border-zinc-800 ${guidance.colorClass}`}
                  >
                    {guidance.urgency}
                  </span>
                </div>

                <ul className="space-y-3">
                  {guidance.steps.map((step, sIdx) => (
                    <li
                      key={sIdx}
                      className="flex gap-3 text-xs md:text-sm text-zinc-300 font-medium leading-relaxed items-start"
                    >
                      <span className="text-red-500 font-bold select-none mt-0.5">
                        »
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-zinc-900 flex justify-end">
                <Link
                  to="/contact"
                  className="text-xs font-bold uppercase text-yellow-500 tracking-wider hover:text-white transition-colors flex items-center gap-1"
                >
                  Get Free Verified Report Copy <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= AUTHORITY CLAIMS FAQ ================= */}
      <div className="w-full max-w-[96vw] px-4 mb-8">
        <div className="bg-zinc-950/60 border border-zinc-900 rounded-xl p-6 md:p-8">
          <h3 className="text-lg md:text-xl font-bold text-white mb-6 border-b border-zinc-900 pb-3">
            Frequently Asked Claims Questions
          </h3>
          <div className="space-y-6 text-sm">
            <div>
              <h4 className="text-yellow-500 font-bold text-base">
                Will filing a storm damage claim raise my monthly premium?
              </h4>
              <p className="text-zinc-400 mt-1 leading-relaxed">
                In most states, insurance providers cannot legally isolate or
                raise your personal premium costs for "Acts of Nature" like hail
                or widespread regional wind storms. Adjustments are rolled out
                entirely by entire zip code metrics or geographic market
                segments.
              </p>
            </div>
            <hr className="border-zinc-900/60" />
            <div>
              <h4 className="text-yellow-500 font-bold text-base">
                How long do I have to file a claim after an Ozark storm hits?
              </h4>
              <p className="text-zinc-400 mt-1 leading-relaxed">
                While many standard regional policies allow a 12-to-24 month
                window from the date of the verified weather incident,
                underlying framework micro-fractures begin drawing moisture
                immediately. Leaving structural vulnerabilities untreated risks
                total interior denial later on.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CALL TO ACTION FLANK ================= */}
      <div className="w-full max-w-[96vw] px-4 mb-6">
        <div className="bg-zinc-950/40 border border-zinc-900/80 rounded-xl p-8 text-center backdrop-blur-xs">
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
            Let Barneys Supply Handle The Hassle
          </h3>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto mt-2 mb-6 leading-relaxed">
            Don't accept an unfair, lowballed exterior payout check. Get our
            diagnostic experts out on your roof structure before you talk to
            your insurance adjusters.
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
              Request Insurance Help
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </PageShell>
  );
}

export default Insurance;
