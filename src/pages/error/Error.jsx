import { Link, useRouteError } from "react-router-dom";
import NavBar from "../../components/navigation/NavBar";
import PfsFooter from "../../assets/pfs-footer.webp";
import Footer from "../../components/footer/Footer";

function Error() {
  // Capture the incoming routing or rendering exception object
  const error = useRouteError();
  console.error(error); // Keep logging to the console for traditional debugging

  /**
   * Helper function to extract readable data out of the unknown error object.
   * Handles native router errors, standard JS errors, or fallback strings.
   */
  const getErrorDetails = () => {
    if (!error) {
      return {
        status: 404,
        statusText: "Not Found",
        message: "The requested URL path does not map to a structural view.",
      };
    }

    return {
      status: error.status || "App Crash",
      statusText: error.statusText || "Internal Script Error",
      message:
        error.message ||
        (typeof error === "string"
          ? error
          : "An unexpected execution error occurred inside the layout components."),
    };
  };

  const details = getErrorDetails();

  return (
    <div className="bg-gradient-to-bl from-black md:via-black md:via-50% via-red-950 to-amber-950 min-h-screen flex flex-col justify-between pb-4 md:pb-8">
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

      <div>
        <NavBar />
      </div>

      <div className="flex-grow flex flex-col items-center justify-center text-center px-4 animate-fade-in-up">
        {/* Glow Icon Header */}
        <div className="relative group mb-4">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-1000"></div>
          <div className="relative bg-zinc-950 p-5 rounded-full border border-red-900/50 text-red-500 font-mono text-xl font-bold tracking-wider px-6 shadow-inner">
            CODE: {details.status}
          </div>
        </div>

        {/* Dynamic Typography Headings */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          System Status:{" "}
          <span className="text-red-500">{details.statusText}</span>
        </h1>

        <p className="text-zinc-400 mt-4 text-sm md:text-base max-w-md mx-auto">
          The operation encountered an interruption. Review the diagnostic
          report breakdown below:
        </p>

        {/* Diagnostic Code Printout Card Box */}
        <div className="w-full max-w-xl mx-auto mt-6 bg-zinc-950/80 rounded-xl border border-zinc-800 p-4 text-left font-mono text-xs shadow-2xl relative overflow-hidden">
          {/* Decorative Terminal Dots */}
          <div className="flex gap-1.5 mb-3 border-b border-zinc-900 pb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 block"></span>
            <span className="text-zinc-600 pl-2 text-[10px] uppercase tracking-wider font-sans">
              Diagnostic Report
            </span>
          </div>

          <div className="text-zinc-400 space-y-1.5 break-words">
            <p>
              <span className="text-zinc-600">// Environment:</span> Production
              / Client View
            </p>
            <p>
              <span className="text-red-400 font-bold">Error Exception:</span>{" "}
              {details.message}
            </p>
            {error?.stack && (
              <p className="text-zinc-600 text-[10px] max-h-24 overflow-y-auto mt-2 pt-2 border-t border-zinc-900/50 whitespace-pre-wrap">
                {error.stack}
              </p>
            )}
          </div>
        </div>

        {/* Navigation Return Link button */}
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

      {/* Footer System Logo Alignment */}
      <Footer />
    </div>
  );
}

export default Error;
