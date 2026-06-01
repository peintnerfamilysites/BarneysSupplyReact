import { Link } from "react-router-dom";
import NavBar from "../../components/navigation/NavBar";
import PfsFooter from "../../assets/pfs-footer.webp";

function Error() {
  return (
    <div className="bg-gradient-to-bl from-black md:via-black md:via-50% via-red-950 to-amber-950 min-h-screen flex flex-col justify-between pb-4 md:pb-8">
      {/* Reuses your custom animation block so the elements gracefully slide in */}
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

      {/* Keeps navigation active so they can jump to other pages easily */}
      <div>
        <NavBar />
      </div>

      {/* Main 404 Hero Content */}
      <div className="flex-grow flex flex-col items-center justify-center text-center px-4 animate-fade-in-up">
        {/* Glowing Construction-Themed Icon Box */}
        <div className="relative group mb-6">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-zinc-950 p-5 rounded-full border border-red-900/50 text-yellow-500">
            {/* Custom SVG Construction/Traffic Cone */}
            <svg
              className="w-16 h-16 md:w-20 md:h-20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 2L3 20h18L12 2zM5.7 17h12.6M8.4 12h7.2M10.2 8h3.6"
              />
            </svg>
          </div>
        </div>

        {/* Brand-consistent Typography */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          404 - <span className="text-red-500">Under Construction?</span>
        </h1>

        <p className="text-zinc-400 mt-4 text-base md:text-lg max-w-md mx-auto">
          Sorry, this page seems to have drifted off the blueprints or doesn't
          exist anymore. Let's get you back to the main site.
        </p>

        {/* Dynamic, Glowing Call-to-Action Button back to Home */}
        <div className="mt-8 relative group inline-block">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-amber-500 to-yellow-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
          <Link
            to="/"
            className="relative block px-8 py-3.5 bg-zinc-950 rounded-xl text-white font-bold text-base tracking-wide uppercase transition-all duration-300 group-hover:scale-[1.02] group-hover:text-yellow-400"
          >
            Return to Homepage
          </Link>
        </div>
      </div>

      {/* Footer Branding Placement matched to Home page layout */}
      <div className="w-full flex justify-center md:justify-end md:pr-12 mt-4">
        <img
          src={PfsFooter}
          className="w-2/5 md:w-1/4 h-auto object-contain cursor-pointer transition-all duration-300 scale-75 hover:scale-100 filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)] hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]"
          alt="PFS Footer branding"
        />
      </div>
    </div>
  );
}

export default Error;
