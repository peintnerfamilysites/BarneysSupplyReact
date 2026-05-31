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
    const mediaQuery = window.matchMedia("(min-width: 992px)");
    setIsDesktop(mediaQuery.matches);

    const handleResize = e => {
      setIsDesktop(e.matches);
    };

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const handleNavLinkClick = (e, path) => {
    if (isDesktop) return;

    e.preventDefault();
    e.stopPropagation(); // CLEANUP: This handles the propagation safety on its own
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
      <div className="fixed top-1/2 -translate-y-1/2 right-1 md:right-5 lg:hidden z-50 w-12 h-12 flex items-center justify-center">
        <img
          src={NavOpen}
          onClick={handleModal}
          alt="Open menu"
          className="w-full h-auto object-contain cursor-pointer"
        />
      </div>

      <ul
        onClick={handleModal}
        onAnimationEnd={handleAnimationEnd}
        className={`nav-links w-full h-full flex flex-col items-center justify-center gap-4 text-2xl pb-20 lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:pb-0 lg:h-auto lg:text-xl lg:w-full 
          ${!isDesktop ? "animate__animated" : ""} 
          ${isOpen ? "flex" : "hidden"} 
          ${!isDesktop && isAnimatingOut ? "animate__fadeOutUp" : ""} 
          ${!isDesktop && !isAnimatingOut ? "animate__fadeInDown" : ""} 
          ${isOpen ? "bg-gradient-to-r from-black via-red-950 to-amber-950" : "bg-transparent"}`}
      >
        {/* 1. Logo Left Container */}
        <li className="w-full lg:w-64 lg:flex-initial text-center lg:flex lg:justify-center lg:items-center py-4">
          {/* CLEANED UP: Standardized single handler invocation avoids build compilation errors */}
          <Link
            to="/"
            onClick={e => handleNavLinkClick(e, "/")}
            className="inline-block lg:flex lg:justify-center lg:items-center w-auto lg:w-full"
          >
            <img
              src={MainSitesLogo}
              alt="Main Sites Logo"
              className="w-40 lg:w-30 mb-10 lg:my-2 block mx-auto"
            />
          </Link>
        </li>

        {/* 2. Links Container */}
        <li className="w-full flex flex-col items-center gap-8 lg:flex-row lg:flex-1 lg:justify-center lg:gap-14 lg:w-auto">
          {/* Home Button */}
          <div
            onClick={e => e.stopPropagation()}
            className="cursor-pointer bg-red-700 font-bold text-center w-60 lg:w-auto lg:flex-1 max-w-[160px] rounded-lg border-2 border-yellow-300 transition-colors duration-200 hover:bg-yellow-300 hover:text-red-700 hover:border-red-700"
          >
            <Link
              to="/"
              onClick={e => handleNavLinkClick(e, "/")}
              className="block w-full h-full py-4 lg:py-2 px-1 text-sm xl:text-base"
            >
              Home
            </Link>
          </div>

          {/* About Us Button */}
          <div
            onClick={e => e.stopPropagation()}
            className="cursor-pointer bg-red-700 font-bold text-center w-60 lg:w-auto lg:flex-1 max-w-[160px] rounded-lg border-2 border-yellow-300 transition-colors duration-200 hover:bg-yellow-300 hover:text-red-700 hover:border-red-700"
          >
            <Link
              to="/about"
              onClick={e => handleNavLinkClick(e, "/about")}
              className="block w-full h-full py-4 lg:py-2 px-1 text-sm xl:text-base"
            >
              About Us
            </Link>
          </div>

          {/* Contact Us Button */}
          <div
            onClick={e => e.stopPropagation()}
            className="cursor-pointer bg-red-700 font-bold text-center w-60 lg:w-auto lg:flex-1 max-w-[160px] rounded-lg border-2 border-yellow-300 transition-colors duration-200 hover:bg-yellow-300 hover:text-red-700 hover:border-red-700"
          >
            <Link
              to="/contact"
              onClick={e => handleNavLinkClick(e, "/contact")}
              className="block w-full h-full py-4 lg:py-2 px-1 text-sm xl:text-base"
            >
              Contact Us
            </Link>
          </div>

          {/* Services Button */}
          <div
            onClick={e => e.stopPropagation()}
            className="cursor-pointer bg-red-700 font-bold text-center w-60 lg:w-auto lg:flex-1 max-w-[160px] rounded-lg border-2 border-yellow-300 transition-colors duration-200 hover:bg-yellow-300 hover:text-red-700 hover:border-red-700"
          >
            <Link
              to="/services"
              onClick={e => handleNavLinkClick(e, "/services")}
              className="block w-full h-full py-4 lg:py-2 px-1 text-sm xl:text-base"
            >
              Services
            </Link>
          </div>

          {/* Insurance Button */}
          <div
            onClick={e => e.stopPropagation()}
            className="cursor-pointer bg-red-700 font-bold text-center w-60 lg:w-auto lg:flex-1 max-w-[160px] rounded-lg border-2 border-yellow-300 transition-colors duration-200 hover:bg-yellow-300 hover:text-red-700 hover:border-red-700"
          >
            <Link
              to="/insurance"
              onClick={e => handleNavLinkClick(e, "/insurance")}
              className="block w-full h-full py-4 lg:py-2 px-1 text-sm xl:text-base"
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
