import { Link } from "react-router-dom";
import PfsFooter from "../../assets/pfs-footer.webp";

function Footer() {
  return (
    <footer className="w-full mt-12 border-t border-zinc-900/50 py-8">
      {/* 
        Responsive Container: 
        - Mobile: flex-col (stacks elements)
        - Desktop (md): flex-row (horizontal alignment)
      */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 px-4">
        {/* Navigation & Copyright Block */}
        <div className="flex flex-row items-center gap-4 md:gap-6 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold whitespace-nowrap">
          <Link
            to="/about"
            className="text-zinc-500 hover:text-red-500 transition-colors"
          >
            About & Work
          </Link>
          <span className="text-zinc-800">|</span>
          <Link
            to="/terms"
            className="text-zinc-500 hover:text-red-500 transition-colors"
          >
            Terms of Use
          </Link>

          {/* Copyright - hidden on very small screens to keep the line clean */}
          <span className="text-zinc-800 hidden lg:inline">|</span>
          <p className="text-zinc-800 text-[9px] hidden lg:block">
            © {new Date().getFullYear()} Barneys Supply.
          </p>
        </div>

        {/* Footer Image - Larger Size */}
        <div className="flex items-center">
          <img
            src={PfsFooter}
            className="w-40 md:w-56 h-auto object-contain cursor-pointer transition-all duration-300 hover:scale-[1.05] filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)] hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]"
            alt="PFS Footer representation"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
