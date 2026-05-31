import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import NavOpen from "../../assets/nav-open.png";
import MainSitesLogo from "../../assets/main-sites-logo.png";
import CallUs from "../../assets/call-us.png";
import ContactUs from "../../assets/contact-us.png";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [pendingPath, setPendingPath] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 992px)");

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

  const getButtonConfig = path => {
    const isActive = location.pathname === path;

    const baseContainer =
      "cursor-pointer font-semibold text-center w-72 lg:w-auto lg:flex-1 max-w-[240px] rounded-xl border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hover:-translate-y-0.5 active:scale-95 active:brightness-90 shrink-0";
    const baseLink =
      "block w-full h-full py-3.5 lg:py-2 px-2 text-sm tracking-wide transition-colors duration-300";

    if (isActive) {
      return {
        container: `${baseContainer} bg-gradient-to-b from-yellow-300 to-amber-300 border-yellow-400 shadow-[0_4px_20px_rgba(253,224,71,0.25)] lg:scale-105`,
        link: `${baseLink} text-red-950 font-bold`,
      };
    } else {
      return {
        container: `${baseContainer} bg-gradient-to-b from-red-700 to-red-800 border-yellow-400/30 shadow-md hover:from-yellow-300 hover:to-amber-300 hover:border-yellow-400 hover:shadow-[0_4px_20px_rgba(253,224,71,0.25)]`,
        link: `${baseLink} text-white/95 hover:text-red-950 hover:font-bold`,
      };
    }
  };

  // MODIFIED: Added animate__fast to make the inner item transitions snappier
  const getMobileStaggerClass = () => {
    return !isDesktop && isOpen
      ? "animate__animated animate__fadeInUp animate__fast"
      : "";
  };

  return (
    <nav className="navbar absolute lg:static lg:flex lg:justify-between lg:items-center w-full mx-auto h-full lg:h-auto bg-transparent lg:bg-gradient-to-r lg:from-black lg:via-red-950 lg:to-amber-950 lg:px-6">
      <div className="fixed top-1/2 -translate-y-1/2 right-1 md:right-5 lg:hidden z-50 w-12 h-12 flex items-center justify-center">
        <img
          src={NavOpen}
          onClick={handleModal}
          alt={isOpen ? "Close menu" : "Open menu"}
          className={`w-full h-auto object-contain cursor-pointer transition-all duration-300 ease-out active:scale-75
            ${isOpen ? "rotate-90 brightness-90 drop-shadow-[0_0_12px_rgba(251,191,36,0.6)]" : ""}`}
        />
      </div>

      {/* MODIFIED: Added animate__fast to the parent overlay entry/exit */}
      <ul
        onClick={handleModal}
        onAnimationEnd={handleAnimationEnd}
        className={`nav-links w-full h-full fixed inset-0 lg:static flex flex-col items-center justify-start gap-4 text-2xl pt-24 pb-12 overflow-y-auto lg:overflow-visible lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:pb-0 lg:pt-0 lg:h-auto lg:text-xl lg:w-full 
          ${!isDesktop ? "animate__animated animate__fast" : ""} 
          ${isOpen ? "flex" : "hidden"} 
          ${!isDesktop && isAnimatingOut ? "animate__fadeOutUp" : ""} 
          ${!isDesktop && !isAnimatingOut ? "animate__fadeInDown" : ""} 
          ${isOpen ? "bg-gradient-to-r from-black/90 via-red-950/90 to-amber-950/90 backdrop-blur-xl" : "bg-transparent"}`}
      >
        {/* Logo Left Container */}
        {/* MODIFIED: Tightened animationDelay from 100ms to 40ms */}
        <li
          className={`w-full lg:w-[320px] lg:flex-initial text-center lg:relative lg:h-32 lg:flex lg:items-center lg:justify-center py-4 shrink-0 ${getMobileStaggerClass()}`}
          style={{ animationDelay: isOpen ? "40ms" : "0ms" }}
        >
          <Link
            to="/"
            onClick={e => handleNavLinkClick(e, "/")}
            className="inline-block w-40 lg:absolute lg:top-[58%] lg:-translate-y-45/100 lg:left-1/2 lg:-translate-x-1/2 lg:w-[200px] flex items-center justify-center group"
          >
            <img
              src={MainSitesLogo}
              alt="Main Sites Logo"
              className="w-full h-auto mb-10 max-h-[500px]:mb-4 block mx-auto lg:w-full lg:h-full lg:scale-100 lg:object-contain lg:my-0 lg:mb-0 transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:brightness-125"
            />
          </Link>
        </li>

        {/* Buttons Center Container */}
        <li className="w-full flex flex-col items-center justify-center gap-5 pb-12 lg:flex-row lg:flex-1 lg:justify-center lg:gap-3 xl:gap-5 lg:w-auto lg:pb-0 flex-wrap max-w-xl lg:max-w-none">
          {/* Home Button */}
          {/* MODIFIED: Tightened animationDelay from 250ms to 100ms */}
          <div
            onClick={e => e.stopPropagation()}
            className={`${getButtonConfig("/").container} ${getMobileStaggerClass()}`}
            style={{ animationDelay: isOpen ? "100ms" : "0ms" }}
          >
            <Link
              to="/"
              onClick={e => handleNavLinkClick(e, "/")}
              className={getButtonConfig("/").link}
            >
              Home
            </Link>
          </div>

          {/* About Us Button */}
          {/* MODIFIED: Tightened animationDelay from 400ms to 160ms */}
          <div
            onClick={e => e.stopPropagation()}
            className={`${getButtonConfig("/about").container} ${getMobileStaggerClass()}`}
            style={{ animationDelay: isOpen ? "160ms" : "0ms" }}
          >
            <Link
              to="/about"
              onClick={e => handleNavLinkClick(e, "/about")}
              className={getButtonConfig("/about").link}
            >
              About Us
            </Link>
          </div>

          {/* Contact Us Button */}
          {/* MODIFIED: Tightened animationDelay from 550ms to 220ms */}
          <div
            onClick={e => e.stopPropagation()}
            className={`${getButtonConfig("/contact").container} ${getMobileStaggerClass()}`}
            style={{ animationDelay: isOpen ? "220ms" : "0ms" }}
          >
            <Link
              to="/contact"
              onClick={e => handleNavLinkClick(e, "/contact")}
              className={getButtonConfig("/contact").link}
            >
              Contact Us
            </Link>
          </div>

          {/* Services Button */}
          {/* MODIFIED: Tightened animationDelay from 700ms to 280ms */}
          <div
            onClick={e => e.stopPropagation()}
            className={`${getButtonConfig("/services").container} ${getMobileStaggerClass()}`}
            style={{ animationDelay: isOpen ? "280ms" : "0ms" }}
          >
            <Link
              to="/services"
              onClick={e => handleNavLinkClick(e, "/services")}
              className={getButtonConfig("/services").link}
            >
              Services
            </Link>
          </div>

          {/* Insurance Button */}
          {/* MODIFIED: Tightened animationDelay from 850ms to 340ms */}
          <div
            onClick={e => e.stopPropagation()}
            className={`${getButtonConfig("/insurance").container} ${getMobileStaggerClass()}`}
            style={{ animationDelay: isOpen ? "340ms" : "0ms" }}
          >
            <Link
              to="/insurance"
              onClick={e => handleNavLinkClick(e, "/insurance")}
              className={getButtonConfig("/insurance").link}
            >
              Insurance
            </Link>
          </div>
        </li>

        {/* Call Us Button */}
        {/* MODIFIED: Tightened animationDelay from 1000ms to 400ms */}
        <li
          className={`w-full flex justify-center -mt-2 pb-12 lg:hidden shrink-0 ${getMobileStaggerClass()}`}
          style={{ animationDelay: isOpen ? "400ms" : "0ms" }}
        >
          <a
            href="tel:+19034177043"
            onClick={e => e.stopPropagation()}
            className="inline-block transition-transform active:scale-90 duration-150 w-36 max-w-[120px]"
          >
            <img
              src={CallUs}
              alt="Button to call Barneys Supply"
              className="w-full h-full object-contain block mx-auto"
            />
          </a>
        </li>

        {/* Desktop Contact Button Right Container */}
        <li className="hidden lg:flex lg:w-[220px] lg:flex-initial lg:h-32 lg:items-center lg:justify-end lg:pr-10 shrink-0">
          <Link
            to="/contact"
            onClick={e => e.stopPropagation()}
            className="inline-block group transition-all duration-300 hover:-translate-y-0.5"
          >
            <img
              src={ContactUs}
              alt="Contact Us Button"
              className="h-14 w-auto object-contain block scale-[3.0] transition-all duration-300 group-hover:brightness-125"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
