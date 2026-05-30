import { Link } from "react-router-dom";
import NavOpen from "../../assets/nav-open.png";
import OpenModal from "../modalControl/OpenModal";
import MainSitesLogo from "../../assets/main-sites-logo.png";

function NavBar() {
  return (
    <nav className="navbar absolute lg:static w-screen h-[100vh] lg:h-auto">
      <img
        src={NavOpen}
        onClick={OpenModal}
        alt="Image to open the navbar to Barneys Supply Company"
        className="w-1/6 fixed top-48/100 right-1 lg:hidden z-50"
      />
      <ul className="nav-links h-full bg-gray-900 hidden flex flex-col items-center justify-center gap-14 text-3xl pb-20 lg:flex lg:flex-row lg:gap-10 lg:justify-center lg:items-center lg:h-auto lg:bg-transparent lg:text-md animate__animated">
        <img
          src={MainSitesLogo}
          alt="Main Sites Logo"
          className="w-1/2 md:w-1/4 lg:w-1/10"
        />
        <li className="lg:ml-20 bg-red-700 font-bold text-center w-60 p-4 lg:w-1/10 lg:py-2 rounded-lg">
          <Link to="/">Home</Link>
        </li>
        <li className="bg-red-700 font-bold text-center w-60 p-4 lg:w-1/10 lg:py-2 rounded-lg">
          <Link to="/about">About</Link>
        </li>
        <li className="bg-red-700 font-bold text-center w-60 p-4 lg:w-1/10 lg:py-2 rounded-lg">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="bg-red-700 font-bold text-center w-60 p-4 lg:w-1/10 lg:py-2 rounded-lg">
          <Link to="/services">Services</Link>
        </li>
        <li className="bg-red-700 font-bold  text-center w-60 p-4 lg:w-1/10 lg:py-2 rounded-lg">
          <Link to="/insurance">Insurance</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
