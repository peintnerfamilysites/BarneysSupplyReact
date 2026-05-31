import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import NavOpen from "../../assets/nav-open.png";
import MainSitesLogo from "../../assets/main-sites-logo.png";

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

    // ADJUSTED: Changed mobile base width to w-72 and pushed maximum desktop width up to max-w-[240px]
    const baseContainer =
      "cursor-pointer font-semibold text-center w-72 lg:w-auto lg:flex-1 max-w-[240px] rounded-xl border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hover:-translate-y-0.5 shrink-0";
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
        className={`nav-links w-full h-full fixed inset-0 lg:static flex flex-col items-center justify-start gap-4 text-2xl pt-24 pb-12 overflow-y-auto lg:overflow-visible lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:pb-0 lg:pt-0 lg:h-auto lg:text-xl lg:w-full 
          ${!isDesktop ? "animate__animated" : ""} 
          ${isOpen ? "flex" : "hidden"} 
          ${!isDesktop && isAnimatingOut ? "animate__fadeOutUp" : ""} 
          ${!isDesktop && !isAnimatingOut ? "animate__fadeInDown" : ""} 
          ${isOpen ? "bg-gradient-to-r from-black via-red-950 to-amber-950" : "bg-transparent"}`}
      >
        {/* Logo Left Container */}
        <li className="w-full lg:w-[320px] lg:flex-initial text-center lg:relative lg:h-32 lg:flex lg:items-center lg:justify-center py-4 shrink-0">
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
          <div
            onClick={e => e.stopPropagation()}
            className={getButtonConfig("/").container}
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
          <div
            onClick={e => e.stopPropagation()}
            className={getButtonConfig("/about").container}
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
          <div
            onClick={e => e.stopPropagation()}
            className={getButtonConfig("/contact").container}
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
          <div
            onClick={e => e.stopPropagation()}
            className={getButtonConfig("/services").container}
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
          <div
            onClick={e => e.stopPropagation()}
            className={getButtonConfig("/insurance").container}
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

        <li className="hidden lg:block lg:flex-initial lg:w-[320px]"></li>
      </ul>
    </nav>
  );
}

export default NavBar;
