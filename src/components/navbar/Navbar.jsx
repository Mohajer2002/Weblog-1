import { Bars3Icon, PhoneIcon } from "@heroicons/react/24/solid";
import { links } from "../../../public/server/dataLinks";
import { useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import { NavLink } from "react-router-dom";

// Navbar component
function Navbar() {
  // State for handling mobile navbar toggle
  const [isOpen, setIsOpen] = useState(false);
  // Ref to detect clicks outside the navbar
  const ref = useRef();
  // Custom hook to close the navbar when clicking outside
  useOutsideClick(ref, "navBtn", () => setIsOpen(false));

  return (
    <div className="header w-full h-20 bg-cBlue-100 fixed top-0 px-10 grid md:grid-cols-3 lg:grid-cols-4 md:px-10 lg:px-10 items-center z-50">
      {/* Logo */}
      <div className="logo flex justify-center items-center">
        <img src="../../../public/images/logo.svg" alt="logo" />
      </div>

      {/* Navbar items for mobile view */}
      <button
        id="navBtn"
        className="btn absolute w-10 h-10 flex justify-center items-center rounded-md p-1 m-2 md:hidden"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div id="navBtn" className="w-full h-full absolute"></div>
        <Bars3Icon className="fill-white" />
      </button>
      {/* Navbar for mobile view */}
      <nav
        ref={ref}
        className={`${
          isOpen ? "flex navbarMobile " : "hidden"
        } md:flex md:col-span-2  overflow-hidden`}
      >
        <ul className="flex flex-col justify-center items-center w-full gap-y-3 md:flex-row md:gap-x-5 lg:gap-x-8">
          {/* Mapping through links to create navbar items */}
          {links.map((item, index) => {
            return (
              <li key={index} className="flex items-center p-2 md:p-0">
                {/* NavLink for navigation */}
                <NavLink to={`${item.url}`} className="navLink">
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Phone number section */}
      <div className="hidden lg:flex flex-row gap-x-3 justify-center items-center">
        {/* Phone icon */}
        <div className="w-12 h-12 flex justify-center items-center bg-white rounded-full">
          <PhoneIcon className="w-6 h-6 fill-cBlue-400" />
        </div>
        {/* Phone number link */}
        <a href="tel: 09025033102">09025033102</a>
      </div>
    </div>
  );
}

export default Navbar;
