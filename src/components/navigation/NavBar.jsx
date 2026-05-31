import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavOpen from "../../assets/nav-open.png";
import MainSitesLogo from "../../assets/main-sites-logo.png";

function NavBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [pendingPath, setPendingPath] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // FIX: Combined width and orientation checks to ensure landscape mobile doesn't trigger desktop mode
    const mediaQuery = window.matchMedia(
      "(min-width: 992px) and (orientation: landscape)",
    );

    // Fallback detection: if it's a touch device with short height, treat it as mobile
    const checkIsDesktop = () => {
      const isShortLandscape =
        window.innerHeight < 600 && window.innerWidth > window.innerHeight;
      setIsDesktop(mediaQuery.matches && !isShortLandscape);
    };

    checkIsDesktop();

    const handleResize = () => {
      checkIsDesktop();
    };

    mediaQuery.addEventListener("change", handleResize);
    window.addEventListener("resize", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavLinkClick = (e, path) => {
    if (isDesktop) return;

    e.preventDefault();
    e.stopPropagation();
    setPendingPath(path);
    setIsAnimatingOut(true);
  };

  const handleModal = () => {
    if (isDesktop) return;

    if (isOpen) {
      setPendingPath(null);
      setIsAnimatingOut(true);
    } else {
      setIsOpen(true);
    }
  };

  const handleAnimationEnd = () => {
    if (isAnimatingOut) {
      setIsOpen(false);
      setIsAnimatingOut(false);

      if (typeof pendingPath === "string") {
        navigate(pendingPath);
        setPendingPath(null);
      }
    }
  };

  return (
    <nav className="navbar absolute lg:static lg:flex lg:justify-between lg:items-center w-full mx-auto h-full lg:h-auto bg-transparent lg:bg-gradient-to-r lg:from-black lg:via-red-950 lg:to-amber-950 lg:px-6">
      {/* FIX: Set a safe maximum height and adjusted position for the menu button on short landscape screens */}
      <div className="fixed top-12 landscape:top-6 lg:top-1/2 lg:-translate-y-1/2 right-1 md:right-5 lg:hidden z-50 w-12 h-12 flex items-center justify-center">
        <img
          src={NavOpen}
          onClick={handleModal}
          alt="Open menu"
          className="w-full h-auto object-contain cursor-pointer"
        />
      </div>

      {/* FIX: Added 'overflow-y-auto' and adjusted padding/layout constraints for horizontal viewports */}
      <ul
        onClick={handleModal}
        onAnimationEnd={handleAnimationEnd}
        className={`nav-links w-full h-full fixed inset-0 lg:static flex flex-col items-center justify-start landscape:justify-start gap-4 text-2xl pt-24 pb-12 overflow-y-auto lg:overflow-visible lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:pb-0 lg:pt-0 lg:h-auto lg:text-xl lg:w-full 
          ${!isDesktop ? "animate__animated" : ""} 
          ${isOpen ? "flex" : "hidden"} 
          ${!isDesktop && isAnimatingOut ? "animate__fadeOutUp" : ""} 
          ${!isDesktop && !isAnimatingOut ? "animate__fadeInDown" : ""} 
          ${isOpen ? "bg-gradient-to-r from-black via-red-950 to-amber-950" : "bg-transparent"}`}
      >
        {/* 1. Logo Left Container */}
        {/* FIX: Reduced huge landscape margin (mb-10 -> landscape:mb-4) to save vertical screen space */}
        <li className="w-full lg:w-64 lg:flex-initial text-center lg:flex lg:justify-center lg:items-center py-4 shrink-0">
          <Link
            to="/"
            onClick={e => handleNavLinkClick(e, "/")}
            className="inline-block lg:flex lg:justify-center lg:items-center w-auto lg:w-full"
          >
            <img
              src={MainSitesLogo}
              alt="Main Sites Logo"
              className="w-40 lg:w-30 mb-10 landscape:mb-4 lg:my-2 block mx-auto"
            />
          </Link>
        </li>

        {/* 2. Links Container */}
        {/* FIX: Converted links into a wrapping flex row or tight grid layout when flipped sideways */}
        <li className="w-full flex flex-col items-center gap-6 landscape:flex-row landscape:flex-wrap landscape:justify-center landscape:max-w-xl lg:flex-row lg:flex-1 lg:justify-center lg:gap-14 lg:w-auto pb-12 lg:pb-0">
          {/* Home Button */}
          <div
            onClick={e => e.stopPropagation()}
            className="cursor-pointer bg-red-700 font-bold text-center w-60 landscape:w-40 lg:w-auto lg:flex-1 max-w-[160px] rounded-lg border-2 border-yellow-300 transition-colors duration-200 hover:bg-yellow-300 hover:text-red-700 hover:border-red-700"
          >
            <Link
              to="/"
              onClick={e => handleNavLinkClick(e, "/")}
              className="block w-full h-full py-4 landscape:py-2 lg:py-2 px-1 text-sm xl:text-base"
            >
              Home
            </Link>
          </div>

          {/* About Us Button */}
          <div
            onClick={e => e.stopPropagation()}
            className="cursor-pointer bg-red-700 font-bold text-center w-60 landscape:w-40 lg:w-auto lg:flex-1 max-w-[160px] rounded-lg border-2 border-yellow-300 transition-colors duration-200 hover:bg-yellow-300 hover:text-red-700 hover:border-red-700"
          >
            <Link
              to="/about"
              onClick={e => handleNavLinkClick(e, "/about")}
              className="block w-full h-full py-4 landscape:py-2 lg:py-2 px-1 text-sm xl:text-base"
            >
              About Us
            </Link>
          </div>

          {/* Contact Us Button */}
          <div
            onClick={e => e.stopPropagation()}
            className="cursor-pointer bg-red-700 font-bold text-center w-60 landscape:w-40 lg:w-auto lg:flex-1 max-w-[160px] rounded-lg border-2 border-yellow-300 transition-colors duration-200 hover:bg-yellow-300 hover:text-red-700 hover:border-red-700"
          >
            <Link
              to="/contact"
              onClick={e => handleNavLinkClick(e, "/contact")}
              className="block w-full h-full py-4 landscape:py-2 lg:py-2 px-1 text-sm xl:text-base"
            >
              Contact Us
            </Link>
          </div>

          {/* Services Button */}
          <div
            onClick={e => e.stopPropagation()}
            className="cursor-pointer bg-red-700 font-bold text-center w-60 landscape:w-40 lg:w-auto lg:flex-1 max-w-[160px] rounded-lg border-2 border-yellow-300 transition-colors duration-200 hover:bg-yellow-300 hover:text-red-700 hover:border-red-700"
          >
            <Link
              to="/services"
              onClick={e => handleNavLinkClick(e, "/services")}
              className="block w-full h-full py-4 landscape:py-2 lg:py-2 px-1 text-sm xl:text-base"
            >
              Services
            </Link>
          </div>

          {/* Insurance Button */}
          <div
            onClick={e => e.stopPropagation()}
            className="cursor-pointer bg-red-700 font-bold text-center w-60 landscape:w-40 lg:w-auto lg:flex-1 max-w-[160px] rounded-lg border-2 border-yellow-300 transition-colors duration-200 hover:bg-yellow-300 hover:text-red-700 hover:border-red-700"
          >
            <Link
              to="/insurance"
              onClick={e => handleNavLinkClick(e, "/insurance")}
              className="block w-full h-full py-4 landscape:py-2 lg:py-2 px-1 text-sm xl:text-base"
            >
              Insurance
            </Link>
          </div>
        </li>

        {/* 3. Ghost Element */}
        <li className="hidden lg:block lg:flex-initial lg:w-64"></li>
      </ul>
    </nav>
  );
}

export default NavBar;
