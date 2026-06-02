import { useState } from "react";

import { Link } from "react-router-dom";

import NavBar from "../../components/navigation/NavBar";

import Established from "../../assets/established.webp";

import Footer from "../../components/footer/Footer";

// --- GALLERY SAMPLES ---

import ShingleRoofing from "../../assets/shingle-roofing.webp";

import VinylSiding from "../../assets/vinyl-siding.webp";

import Gutters from "../../assets/gutters.webp";

import GarageDoors from "../../assets/garage-doors.webp";

// Job 1 imports
import ray from "../../assets/ourwork/job1/ray.jpg";
import ray1 from "../../assets/ourwork/job1/ray1.jpg";
import ray2 from "../../assets/ourwork/job1/ray2.jpg";
import ray3 from "../../assets/ourwork/job1/ray3.jpg";
import ray4 from "../../assets/ourwork/job1/ray4.jpg";
import ray5 from "../../assets/ourwork/job1/ray5.jpg";
import ray6 from "../../assets/ourwork/job1/ray6.jpg";
import ray7 from "../../assets/ourwork/job1/ray7.jpg";
import ray8 from "../../assets/ourwork/job1/ray8.jpg";
// Job 2 imports
import rayfence from "../../assets/ourwork/job2/rayfence.jpg";
import rayfence1 from "../../assets/ourwork/job2/rayfence1.jpg";
import rayfence2 from "../../assets/ourwork/job2/rayfence2.jpg";

// Add more images later when you have them.
// Example:
// import ShingleRoofing2 from "../../assets/shingle-roofing-2.webp";
// import ShingleRoofing3 from "../../assets/shingle-roofing-3.webp";

function About() {
  const MAX_IMAGES_PER_PROJECT = 12;

  // Lightbox Modal States

  const [isOpen, setIsOpen] = useState(false);

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Each card is now treated as one project.
  // Each project can hold up to 12 images max.

  const projectGallery = [
    {
      coverImage: ray,

      title: "Siding Installation",

      location: "ReedsSpring, MO",

      images: [ray, ray1, ray2, ray3, ray4, ray5, ray6, ray7, ray8].slice(
        0,
        MAX_IMAGES_PER_PROJECT,
      ),
    },

    {
      coverImage: rayfence,

      title: "Privacy Fence Installation",

      location: "ReedsSpring, MO",

      images: [rayfence, rayfence1, rayfence2].slice(0, MAX_IMAGES_PER_PROJECT),
    },

    {
      coverImage: Gutters,

      title: "Seamless Gutter System Setup",

      location: "Springfield, MO",

      images: [
        Gutters,
        // Gutters2,
        // Gutters3,
      ].slice(0, MAX_IMAGES_PER_PROJECT),
    },

    {
      coverImage: GarageDoors,

      title: "Heavy Duty Commercial Garage Doors",

      location: "Branson, MO",

      images: [
        GarageDoors,
        // GarageDoors2,
        // GarageDoors3,
      ].slice(0, MAX_IMAGES_PER_PROJECT),
    },

    {
      coverImage: ShingleRoofing,

      title: "Residential Roof Replacement",

      location: "Republic, MO",

      images: [
        ShingleRoofing,
        // Add this project's extra images here
      ].slice(0, MAX_IMAGES_PER_PROJECT),
    },

    {
      coverImage: VinylSiding,

      title: "Custom Exterior Accent Siding",

      location: "Bolivar, MO",

      images: [
        VinylSiding,
        // Add this project's extra images here
      ].slice(0, MAX_IMAGES_PER_PROJECT),
    },

    {
      coverImage: Gutters,

      title: "Commercial Leaf Guard Integration",

      location: "Marshfield, MO",

      images: [
        Gutters,
        // Add this project's extra images here
      ].slice(0, MAX_IMAGES_PER_PROJECT),
    },

    {
      coverImage: GarageDoors,

      title: "Insulated Overhead Sectional Doors",

      location: "Willard, MO",

      images: [
        GarageDoors,
        // Add this project's extra images here
      ].slice(0, MAX_IMAGES_PER_PROJECT),
    },

    {
      coverImage: ShingleRoofing,

      title: "Storm Damage Metal-to-Shingle Retrofit",

      location: "Rogersville, MO",

      images: [
        ShingleRoofing,
        // Add this project's extra images here
      ].slice(0, MAX_IMAGES_PER_PROJECT),
    },

    {
      coverImage: VinylSiding,

      title: "Vertical Board & Batten Siding Profile",

      location: "Clever, MO",

      images: [
        VinylSiding,
        // Add this project's extra images here
      ].slice(0, MAX_IMAGES_PER_PROJECT),
    },

    {
      coverImage: Gutters,

      title: "High-Capacity Downspout Routing",

      location: "Strafford, MO",

      images: [
        Gutters,
        // Add this project's extra images here
      ].slice(0, MAX_IMAGES_PER_PROJECT),
    },

    {
      coverImage: GarageDoors,

      title: "Modern Glass-Panel Garage Entry",

      location: "Battlefield, MO",

      images: [
        GarageDoors,
        // Add this project's extra images here
      ].slice(0, MAX_IMAGES_PER_PROJECT),
    },
  ];

  const currentProject = projectGallery[currentProjectIndex];

  const currentProjectImages = currentProject.images;

  const prevImageIndex =
    (currentImageIndex - 1 + currentProjectImages.length) %
    currentProjectImages.length;

  const nextImageIndex = (currentImageIndex + 1) % currentProjectImages.length;

  const currentImage = currentProjectImages[currentImageIndex];

  const prevPreviewImage = currentProjectImages[prevImageIndex];

  const nextPreviewImage = currentProjectImages[nextImageIndex];

  // Open modal handler at specific project index

  const openLightbox = index => {
    setCurrentProjectIndex(index);

    setCurrentImageIndex(0);

    setIsOpen(true);
  };

  // Navigate to next image inside the currently selected project

  const nextImage = e => {
    e.stopPropagation();

    setCurrentImageIndex(
      prevIndex => (prevIndex + 1) % currentProjectImages.length,
    );
  };

  // Navigate to previous image inside the currently selected project

  const prevImage = e => {
    e.stopPropagation();

    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? currentProjectImages.length - 1 : prevIndex - 1,
    );
  };

  // Reusable outer card border layout (Mirrored perfectly from Home)

  const cardOuterBorderClass = `

w-full relative group overflow-hidden rounded-xl

bg-gradient-to-r from-black via-red-600 to-yellow-500 p-[1px]

shadow-lg transition-all duration-300 hover:scale-[1.01]

hover:shadow-[0_0_30px_rgba(239,68,68,0.25)]

`.trim();

  return (
    <div className="bg-gradient-to-bl from-black md:via-black md:via-50% via-red-950 to-amber-950 min-h-screen pb-4 md:pb-8">
      {/* Smooth fluid entry animation */}

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
        {/* ================= HERO SECTION ================= */}

        <div className="w-full max-w-[96vw] px-4 mt-6 md:mt-8 mb-6 md:mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="w-full md:w-2/3 text-center md:text-left max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Our Legacy in the <span className="text-red-500">Ozarks</span>
            </h1>

            <p className="text-zinc-400 mt-4 text-sm md:text-lg leading-relaxed">
              For over eight decades, Barneys Supply has been the bedrock of
              dependable exterior construction in Southwest Missouri. We combine
              multi-generational craftsmanship with modern, premium solutions to
              protect and elevate your home.
            </p>
          </div>

          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <img
              src={Established}
              className="w-full max-w-[240px] md:max-w-[280px] h-auto object-contain transition-all duration-300 md:drop-shadow-[0_6px_12px_rgba(239,68,68,0.25)]"
              alt="Barneys Supply - Established in 1944"
            />
          </div>
        </div>

        {/* ================= THE STORY CARD ================= */}

        <div className="w-full max-w-[96vw] px-4 mb-8">
          <div className={cardOuterBorderClass}>
            <div className="w-full h-full bg-zinc-950 rounded-xl p-6 md:p-10">
              <div className="border-b border-zinc-900 pb-4 mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-yellow-500"></span>
                  The Barneys Supply Story
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-zinc-400 text-sm md:text-base leading-relaxed">
                <p>
                  Founded in 1944, Barneys Supply started with a simple,
                  unwavering philosophy: provide the hardworking families of
                  Southwest Missouri with exterior infrastructure built to
                  weather any storm. From our humble beginnings, we grew
                  alongside our communities, adapting to new technologies while
                  holding fast to the honest, old-school values that built our
                  reputation.
                </p>

                <p>
                  Today, we continue that unbroken tradition of excellence.
                  Whether handling critical, emergency shingle roofing
                  diagnostics after an Ozark storm, executing precision seamless
                  gutter installations, or transforming residential profiles
                  with premium vinyl siding, our team treats every single
                  project as a testament to our 80-plus-year legacy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= OUR WORK / GALLERY SECTION ================= */}

        <div className="w-full max-w-[96vw] px-4 mb-8">
          <div className="border-b border-zinc-900 pb-4 mb-6 flex flex-col md:flex-row md:items-end justify-between gap-2">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-red-500"></span>
              Our Recent Work
            </h2>

            <p className="text-zinc-500 text-xs md:text-sm">
              Click any project to expand its visual showcase
            </p>
          </div>

          {/* Grid layout with dynamic visibility filters */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {projectGallery.map((item, index) => {
              // Structural filter rules:

              // 1. Completely hide cards 9 through 12 across all platforms

              if (index >= 8) return null;

              // 2. Hide items 5 through 8 exclusively on mobile screens ('hidden sm:block')

              const responsiveWrapperClass =
                index >= 4
                  ? `${cardOuterBorderClass} hidden sm:block cursor-pointer`
                  : `${cardOuterBorderClass} cursor-pointer`;

              return (
                <div
                  key={index}
                  className={responsiveWrapperClass}
                  onClick={() => openLightbox(index)}
                >
                  <div className="w-full h-full bg-zinc-950 rounded-xl overflow-hidden flex flex-col">
                    <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
                      <img
                        src={item.coverImage}
                        alt={item.title}
                        className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-300"
                      />
                    </div>

                    <div className="p-4 bg-zinc-950 mt-auto border-t border-zinc-900/40">
                      <h3 className="text-sm font-bold text-white tracking-wide truncate">
                        {item.title}
                      </h3>

                      <span className="text-xs text-zinc-500 block mt-0.5 font-medium">
                        {item.location}
                      </span>

                      <span className="text-[11px] text-red-500 block mt-1 font-semibold uppercase tracking-wider">
                        {item.images.length} Photo
                        {item.images.length === 1 ? "" : "s"}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= DYNAMIC LEGACY STATS BANNER ================= */}

        <div className="w-full max-w-[96vw] px-4 grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { value: "1944", label: "Established" },

            { value: "80+", label: "Years of Trust" },

            { value: "100%", label: "Ozarks Committed" },

            { value: "Premium", label: "Materials Standard" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-zinc-950/70 rounded-xl p-5 border border-zinc-900/60 text-center shadow-md backdrop-blur-xs"
            >
              <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 tracking-tight">
                {stat.value}
              </div>

              <div className="text-zinc-500 text-xs uppercase font-bold tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ================= CORE VALUE PILLARS ================= */}

        <div className="w-full max-w-[96vw] px-4 grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Pillar 1: Integrity */}

          <div className="p-6 bg-zinc-950/80 backdrop-blur-sm rounded-xl border border-zinc-800/60 hover:border-red-600/40 transition-all group">
            <div className="p-3 rounded-lg bg-red-950 text-red-500 w-fit mb-4 group-hover:scale-110 transition-transform">
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>

            <h3 className="text-white font-bold text-lg mb-2">
              Proven Integrity
            </h3>

            <p className="text-zinc-400 text-sm leading-relaxed">
              We provide completely transparent metrics, straightforward quotes,
              and realistic timelines. No structural shortcuts, no hidden
              surprises.
            </p>
          </div>

          {/* Pillar 2: Craftsmanship */}

          <div className="p-6 bg-zinc-950/80 backdrop-blur-sm rounded-xl border border-zinc-800/60 hover:border-yellow-500/40 transition-all group">
            <div className="p-3 rounded-lg bg-amber-950 text-yellow-500 w-fit mb-4 group-hover:scale-110 transition-transform">
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
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
            </div>

            <h3 className="text-white font-bold text-lg mb-2">
              Premium Craftsmanship
            </h3>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Utilizing high-grade architectural materials and vetted
              installation methods to ensure your home investment holds up over
              decades.
            </p>
          </div>

          {/* Pillar 3: Local Roots */}

          <div className="p-6 bg-zinc-950/80 backdrop-blur-sm rounded-xl border border-zinc-800/60 hover:border-red-600/40 transition-all group">
            <div className="p-3 rounded-lg bg-red-950 text-red-500 w-fit mb-4 group-hover:scale-110 transition-transform">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>

            <h3 className="text-white font-bold text-lg mb-2">
              Committed Locally
            </h3>

            <p className="text-zinc-400 text-sm leading-relaxed">
              We don't chase storms out of state. We live, work, and raise
              families right here in the Ozarks, standing behind our work
              permanently.
            </p>
          </div>
        </div>

        {/* ================= CALL TO ACTION FLANK ================= */}

        <div className="w-full max-w-[96vw] px-4 mb-6">
          <div className="bg-zinc-950/40 border border-zinc-900/80 rounded-xl p-8 text-center relative overflow-hidden backdrop-blur-xs">
            <div className="absolute right-0 bottom-0 translate-x-6 translate-y-6 opacity-5 text-white pointer-events-none">
              <svg
                className="w-40 h-40"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.849-.513a1 1 0 10-1.932-.517l-.26.966a1 1 0 001.932.517l.26-.966zm4.058 2.429a1 1 0 10-.518-1.932l-.966.259a1 1 0 00.518 1.932l.966-.259zM11 18a7 7 0 100-14 7 7 0 000 14zm0-2a5 5 0 110-10 5 5 0 010 10z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
              Ready to Protect Your Home Investment?
            </h3>

            <p className="text-zinc-400 text-sm max-w-xl mx-auto mt-2 mb-6 leading-relaxed">
              Don't wait for a small exterior flaw to turn into an expensive
              framework headache. Contact Barneys Supply for professional-grade
              upkeep.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
              <a
                href="tel:+14177254153"
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-red-700 to-red-800 text-white font-bold rounded-lg text-sm uppercase tracking-wider hover:from-red-600 hover:to-red-700 transition-all text-center shadow-md active:scale-95 border border-red-500/20"
              >
                Call Main Office: (417) 725-4153
              </a>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-3.5 bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold rounded-lg text-sm uppercase tracking-wider hover:border-yellow-500/50 hover:text-white transition-all text-center active:scale-95"
              >
                Request Free Estimate
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>

      {/* ================= HIGH-TECH TRIPLE IMAGES LIGHTBOX WHEEL ================= */}

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8 animate-[fadeIn_0.2s_ease-out]"
          onClick={() => setIsOpen(false)}
        >
          {/* Top Close Control Utility */}

          <button
            className="absolute top-4 right-4 md:top-6 md:right-8 text-zinc-500 hover:text-white text-3xl font-light p-2 cursor-pointer transition-colors z-50 bg-black/40 rounded-full w-12 h-12 flex items-center justify-center border border-zinc-900"
            onClick={() => setIsOpen(false)}
            aria-label="Close Lightbox"
          >
            ✕
          </button>

          {/* Core Interactive Wheel Container */}

          <div className="relative w-full max-w-7xl flex items-center justify-center overflow-hidden py-10">
            {/* LEFT NAV TRIGGERS PREVIOUS CAROUSEL STEP */}

            {currentProjectImages.length > 1 && (
              <button
                className="absolute left-4 md:left-10 z-50 p-4 rounded-full bg-zinc-950/80 border border-zinc-800/80 text-white hover:border-red-600 cursor-pointer transition-all hover:bg-zinc-900 active:scale-95 shadow-xl group"
                onClick={prevImage}
                aria-label="Previous Project Image"
              >
                <svg
                  className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}

            {/* THE DECK INTERACTIVE FRAMEWORK LAYER */}

            <div
              className="w-full flex items-center justify-center gap-4 md:gap-10 relative select-none"
              onClick={e => e.stopPropagation()}
            >
              {/* PREVIOUS FLANK IMAGE PREVIEW CARD */}

              <div
                className="hidden md:block w-1/5 aspect-video overflow-hidden rounded-lg opacity-25 blur-xs scale-90 border border-zinc-900 cursor-pointer hover:opacity-40 transition-all duration-300 transform -rotate-y-12"
                onClick={prevImage}
              >
                <img
                  src={prevPreviewImage}
                  alt="Previous preview context"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CENTRAL MAIN HIGH-RESOLUTION DISPLAY CARD */}

              <div className="w-full md:w-3/5 flex flex-col items-center">
                <div className="relative group p-[1px] bg-gradient-to-b from-zinc-800 via-red-600/30 to-zinc-950 rounded-xl shadow-[0_0_40px_rgba(239,68,68,0.25)] border border-zinc-900">
                  {/* High Tech Crosshair Corner Accents */}

                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-red-500/60 pointer-events-none"></div>

                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-red-500/60 pointer-events-none"></div>

                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-red-500/60 pointer-events-none"></div>

                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-red-500/60 pointer-events-none"></div>

                  <img
                    src={currentImage}
                    alt={currentProject.title}
                    className="max-w-full max-h-[55vh] md:max-h-[60vh] object-contain rounded-xl select-none animate-[scaleIn_0.2s_ease-out]"
                  />
                </div>

                {/* Image Metadata & Location Context Overlay */}

                <div className="text-center mt-6 px-4 w-full max-w-2xl bg-zinc-950/60 border border-zinc-900/80 backdrop-blur-md rounded-xl p-4 shadow-lg">
                  <h4 className="text-white font-bold text-base md:text-xl tracking-wide">
                    {currentProject.title}
                  </h4>

                  <div className="flex items-center justify-center gap-2 mt-1.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>

                    <p className="text-xs text-zinc-400 uppercase tracking-widest font-semibold">
                      Location: {currentProject.location} — (
                      {currentImageIndex + 1} / {currentProjectImages.length})
                    </p>
                  </div>
                </div>
              </div>

              {/* NEXT FLANK IMAGE PREVIEW CARD */}

              <div
                className="hidden md:block w-1/5 aspect-video overflow-hidden rounded-lg opacity-25 blur-xs scale-90 border border-zinc-900 cursor-pointer hover:opacity-40 transition-all duration-300 transform rotate-y-12"
                onClick={nextImage}
              >
                <img
                  src={nextPreviewImage}
                  alt="Next preview context"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* RIGHT NAV TRIGGERS NEXT CAROUSEL STEP */}

            {currentProjectImages.length > 1 && (
              <button
                className="absolute right-4 md:right-10 z-50 p-4 rounded-full bg-zinc-950/80 border border-zinc-800/80 text-white hover:border-red-600 cursor-pointer transition-all hover:bg-zinc-900 active:scale-95 shadow-xl group"
                onClick={nextImage}
                aria-label="Next Project Image"
              >
                <svg
                  className="w-5 h-5 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
