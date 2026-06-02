import NavBar from "../../components/navigation/NavBar";
import Footer from "../../components/footer/Footer";

function TermsOfUse() {
  return (
    <div className="bg-gradient-to-bl from-black md:via-black md:via-50% via-red-950 to-amber-950 min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-grow w-full max-w-4xl mx-auto px-6 py-12 md:py-20">
        <div className="bg-zinc-950/80 backdrop-blur-sm border border-zinc-800 rounded-xl p-8 md:p-12 shadow-2xl">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-10 border-b border-zinc-800 pb-6">
            Terms of <span className="text-red-500">Use</span>
          </h1>

          <div className="space-y-12 text-zinc-300 text-sm md:text-base leading-relaxed">
            {/* PART 1: WEBSITE USAGE */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-red-500 uppercase tracking-widest border-l-4 border-red-500 pl-4">
                I. Website & Digital Liability
              </h2>
              <p>
                The content provided on this website is intended for general
                informational purposes regarding the services offered by Barneys
                Supply. While we strive for precision, we do not guarantee the
                completeness or accuracy of any information found here. Your use
                of this website is at your own risk. Barneys Supply is not
                responsible for any technical errors, outdated content, or
                damages arising from your reliance on this site’s information.
              </p>
            </section>

            {/* PART 2: OPERATIONAL & BUSINESS */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-amber-500 uppercase tracking-widest border-l-4 border-amber-500 pl-4">
                II. Business & Project Liability
              </h2>
              <div className="space-y-4 ml-4">
                <p>
                  <strong>Preliminary Estimates:</strong> All pricing or project
                  estimates generated via this website are preliminary and
                  intended solely for planning purposes. They do not constitute
                  a binding contract or final offer.
                </p>
                <p>
                  <strong>Professional Inspection:</strong> Final project
                  scopes, materials, and costs can only be determined following
                  an on-site inspection by our team and the execution of a
                  formal, written agreement signed by both parties.
                </p>
              </div>
            </section>

            {/* PART 3: LIMITATION OF LIABILITY */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white uppercase tracking-widest border-l-4 border-zinc-500 pl-4">
                III. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted under the laws of the State of
                Missouri, Barneys Supply shall not be held liable for any
                direct, indirect, incidental, or consequential damages resulting
                from the use of our services or this website. Any disputes or
                claims related to our services are governed by the terms
                established within your specific, signed construction contract.
              </p>
            </section>

            {/* PART 4: GOVERNING LAW */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white uppercase tracking-widest border-l-4 border-zinc-500 pl-4">
                IV. Governing Law & Jurisdiction
              </h2>
              <p>
                These terms are governed by the laws of the State of Missouri.
                By using this site, you irrevocably consent to the exclusive
                jurisdiction of the courts located in
                <strong> Greene County, Missouri</strong>, for the resolution of
                any disputes.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default TermsOfUse;
