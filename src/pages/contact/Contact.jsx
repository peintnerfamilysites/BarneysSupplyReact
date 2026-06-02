import { useState } from "react";
import emailjs from "@emailjs/browser"; // 1. Import EmailJS
import NavBar from "../../components/navigation/NavBar";
import PhoneNumbers from "../../assets/phone-numbers.webp";
import Established from "../../assets/established.webp";
import Footer from "../../components/footer/Footer";

function Contact() {
  // Shared base styles for the top brand graphics
  const baseTopImageClass = `
    w-full max-w-[260px] md:max-w-[280px] h-auto object-contain 
    transition-all duration-300
    md:drop-shadow-[0_6px_12px_rgba(239,68,68,0.25)] 
    cursor-pointer mx-auto
  `.trim();

  // Reusable outer card border layout (Mirrored from Home)
  const cardOuterBorderClass = `
    w-full relative group overflow-hidden rounded-xl 
    bg-gradient-to-r from-black via-red-600 to-yellow-500 p-[1px]
    shadow-lg transition-all duration-300 hover:scale-[1.01] 
    hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]
  `.trim();

  // Contact form state management
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceNeeded: "General Inquiry",
    message: "",
  });

  // UI Status tracking states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // 2. The EmailJS form submission logic
  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Dynamic environment variable resolution (Works for Vite or CRA)
    const serviceId =
      import.meta.env?.VITE_EMAILJS_SERVICE_ID ||
      process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId =
      import.meta.env?.VITE_EMAILJS_TEMPLATE_ID ||
      process.env.REACT_APP_TEMPLATE_ID;
    const publicKey =
      import.meta.env?.VITE_EMAILJS_PUBLIC_KEY ||
      process.env.REACT_APP_PUBLIC_KEY;

    // Mapping your state data to match your EmailJS Template variable slots
    const templateParams = {
      from_name: formData.name,
      from_phone: formData.phone,
      from_email: formData.email,
      service_requested: formData.serviceNeeded,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      // Reset form upon successful delivery
      setFormData({
        name: "",
        phone: "",
        email: "",
        serviceNeeded: "General Inquiry",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Submission Failure:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-gradient-to-bl from-black md:via-black md:via-50% via-red-950 to-amber-950 min-h-screen pb-4 md:pb-8">
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
        {/* Top Header Layout Section */}
        <div className="w-full max-w-[96vw] px-4 mt-6 md:mt-8 mb-6 md:mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Call Us Graphic Container - Hidden on mobile, Flanks Left on Desktop */}
          <div className="hidden md:flex w-full md:w-1/4 justify-center order-2 md:order-1">
            <div className="relative w-full text-center">
              <img
                src={PhoneNumbers}
                className={baseTopImageClass}
                alt="Contact Barneys Supply - Call our team today"
              />
              <div className="sr-only">
                <h2>Contact Barneys Supply</h2>
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
          </div>

          {/* Main Core Headline - Centers on Desktop */}
          <div className="w-full md:w-2/4 text-center order-1 md:order-2 max-w-xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Get Your <span className="text-red-500">Free Estimate</span>
            </h1>
            <p className="text-zinc-400 mt-2 text-sm md:text-base">
              Reach out directly to our team or fill out the form below. Barneys
              Supply has been responding to the exterior construction needs of
              the Ozarks since 1944.
            </p>
          </div>

          {/* Established 1944 Graphic Container - Hidden on mobile, Flanks Right on Desktop */}
          <div className="hidden md:flex w-full md:w-1/4 justify-center order-3">
            <img
              src={Established}
              className={baseTopImageClass}
              alt="Barneys Supply - Established in 1944"
            />
          </div>
        </div>

        {/* Main Content Splitting Area */}
        <div className="w-full max-w-[96vw] px-4 flex flex-col lg:flex-row gap-6 items-stretch mb-8">
          {/* Left Column: Instant Click-to-Action Mobile Quick Cards */}
          <div className="w-full lg:w-2/5 flex flex-col gap-4 justify-between">
            {/* Quick Call Box */}
            <a
              href="tel:+14177254153"
              className="flex items-center gap-4 p-5 bg-zinc-950/80 backdrop-blur-sm rounded-xl border border-zinc-800/60 hover:border-red-600/40 transition-all group"
            >
              <div className="p-3 rounded-lg bg-red-950 text-red-500 group-hover:scale-110 transition-transform">
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-zinc-400 text-xs uppercase tracking-wider font-bold">
                  Call Our Main Office
                </h4>
                <p className="text-white font-extrabold text-lg tracking-wide group-hover:text-red-400 transition-colors">
                  (417) 725-4153
                </p>
              </div>
            </a>

            {/* Quick Email Box */}
            <a
              href="mailto:BarneysSupplyCompany@gmail.com"
              className="flex items-center gap-4 p-5 bg-zinc-950/80 backdrop-blur-sm rounded-xl border border-zinc-800/60 hover:border-yellow-500/40 transition-all group"
            >
              <div className="p-3 rounded-lg bg-amber-950 text-yellow-500 group-hover:scale-110 transition-transform">
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-zinc-400 text-xs uppercase tracking-wider font-bold">
                  Email Our Project Desk
                </h4>
                <p className="text-white font-extrabold text-sm sm:text-base tracking-wide group-hover:text-yellow-400 transition-colors break-all">
                  BarneysSupplyCompany@gmail.com
                </p>
              </div>
            </a>

            {/* Coverage Box Details */}
            <div className="flex flex-col justify-center p-6 bg-zinc-950/40 border border-zinc-900/80 rounded-xl relative overflow-hidden flex-1 min-h-[140px] mt-2 lg:mt-0">
              <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-5 text-white">
                <svg
                  className="w-36 h-36"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-1">
                Proudly Serving Southwest Missouri
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Based in the heart of the Ozarks. We provide professional
                emergency shingle roofing diagnostics, custom residential
                transformations, and dependable exterior upkeep.
              </p>
            </div>
          </div>

          {/* Right Column: Premium Form enclosed in the Home Component Border wrapper */}
          <div className={`${cardOuterBorderClass} flex-1`}>
            <div className="w-full h-full bg-zinc-950 rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-white mb-6 tracking-wide border-b border-zinc-900 pb-3 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
                Project Estimate Inquiry
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* 3. Action Notification Banners */}
                {submitStatus === "success" && (
                  <div className="p-4 bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 text-sm rounded-lg font-medium">
                    ✓ Estimate request submitted successfully! Our team will
                    call you shortly.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-4 bg-red-950/80 text-red-400 border border-red-500/30 text-sm rounded-lg font-medium">
                    ✕ Something went wrong sending your message. Please try
                    calling our main office directly.
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zinc-400 text-xs font-bold uppercase mb-2 tracking-wide">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-400 text-xs font-bold uppercase mb-2 tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(417) 555-0199"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-400 text-xs font-bold uppercase mb-2 tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="johndoe@gmail.com"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 text-xs font-bold uppercase mb-2 tracking-wide">
                    Primary Service Needed
                  </label>
                  <select
                    name="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-red-600 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="Shingle Roofing">Shingle Roofing</option>
                    <option value="Vinyl Siding">Vinyl Siding</option>
                    <option value="Seamless Gutters">Seamless Gutters</option>
                    <option value="Garage Doors">Garage Doors</option>
                    <option value="General Inquiry">
                      Other Exterior Service
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-zinc-400 text-xs font-bold uppercase mb-2 tracking-wide">
                    Project Details / Message
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    required
                    value={formData.message}
                    placeholder="Tell us about your project dimensions, timeline, or repair urgency..."
                    onChange={handleInputChange}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-red-600 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* 4. Disable and swap text dynamically when loading */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-red-700 to-red-800 border border-red-500/20 font-bold tracking-wide uppercase text-sm text-white py-3.5 rounded-lg transition-all shadow-md active:scale-[0.98] ${
                    isSubmitting
                      ? "opacity-60 cursor-not-allowed"
                      : "hover:from-red-600 hover:to-red-700"
                  }`}
                >
                  {isSubmitting
                    ? "Sending Request..."
                    : "Send Estimate Request"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Mobile-Only Established Section (Appears right above your footer on mobile screens) */}
        <div className="flex md:hidden w-full justify-center mb-4 px-4">
          <img
            src={Established}
            className="w-full max-w-[240px] h-auto object-contain cursor-pointer"
            alt="Barneys Supply - Established in 1944"
          />
        </div>

        {/* Footer Brand Logo Block */}
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
