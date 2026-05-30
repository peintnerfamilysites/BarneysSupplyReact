import { Link, useNavigate } from "react-router-dom";
import NavOpen from "../../assets/nav-open.png";
import MainSitesLogo from "../../assets/main-sites-logo.png";

function NavBar() {
  const navigate = useNavigate();
  const handleNavLinkClick = (e, path) => {
    //Stop the default behavior of the link
    e.preventDefault();
    // Grab the menu and swap to the exit animation
    const menu = document.querySelector(".nav-links");
    menu.classList.remove("animate__fadeInDown");
    menu.classList.add("animate__fadeOutUp");
    menu.classList.remove("hidden");
    //  Wait for the animation to finish before navigating to the new page
    menu.addEventListener(
      "animationend",
      () => {
        menu.classList.remove("animate__fadeOutUp");
        menu.classList.add("animate__fadeInDown");
        menu.classList.add("hidden");
        navigate(path);
      },
      { once: true },
    );
  };

  const handleModal = () => {
    const menu = document.querySelector(".nav-links");
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      menu.classList.add("animate__fadeInDown");
    } else {
      menu.classList.remove("animate__fadeInDown");
      menu.classList.add("animate__fadeOutUp");
      menu.addEventListener(
        "animationend",
        () => {
          menu.classList.remove("animate__fadeOutUp");
          menu.classList.add("hidden");
        },
        { once: true },
      );
    }
  };

  return (
    <nav className="navbar absolute lg:static w-screen h-[100%] lg:h-auto">
      <img
        src={NavOpen}
        onClick={handleModal}
        alt="Image to open the navbar to Barneys Supply Company"
        className="w-1/6 fixed top-48/100 right-1 lg:hidden z-50"
      />
      <ul className="nav-links h-full bg-gray-900 hidden flex flex-col items-center justify-center gap-10 text-1xl pb-20 lg:flex lg:flex-row lg:gap-10 lg:justify-center lg:items-center lg:h-auto lg:bg-transparent lg:text-md animate__animated">
        <Link
          to="/"
          onClick={e => handleNavLinkClick(e, "/")}
          className="w-90 flex justify-center pt-6"
        >
          <img
            src={MainSitesLogo}
            alt="Main Sites Logo"
            className="w-1/4 sm:w-1/2 md:w-1/4 lg:w-1/10"
          />
        </Link>
        <li className="lg:ml-20 bg-red-700 font-bold text-center w-60 p-4 lg:w-1/10 lg:py-2 rounded-lg border-2 border-yellow-300">
          <Link to="/" onClick={e => handleNavLinkClick(e, "/")}>
            Home
          </Link>
        </li>
        <li className="bg-red-700 font-bold text-center w-60 p-4 lg:w-1/10 lg:py-2 rounded-lg border-2 border-yellow-300">
          <Link to="/about" onClick={e => handleNavLinkClick(e, "/about")}>
            About
          </Link>
        </li>
        <li className="bg-red-700 font-bold text-center w-60 p-4 lg:w-1/10 lg:py-2 rounded-lg border-2 border-yellow-300">
          <Link to="/contact" onClick={e => handleNavLinkClick(e, "/contact")}>
            Contact
          </Link>
        </li>
        <li className="bg-red-700 font-bold text-center w-60 p-4 lg:w-1/10 lg:py-2 rounded-lg border-2 border-yellow-300">
          <Link
            to="/services"
            onClick={e => handleNavLinkClick(e, "/services")}
          >
            Services
          </Link>
        </li>
        <li className="bg-red-700 font-bold  text-center w-60 p-4 lg:w-1/10 lg:py-2 rounded-lg border-2 border-yellow-300">
          <Link
            to="/insurance"
            onClick={e => handleNavLinkClick(e, "/insurance")}
          >
            Insurance
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
