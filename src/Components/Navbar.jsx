import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">

      <span className="text-xl font-bold tracking-wide">
        <a href="/">Portfolio.</a>
      </span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-slate-400 px-2 rounded-xl bg-opacity-35 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >


        <a
          href="#About"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        >
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            About
          </li>
        </a>


        <a
          href="#Experience"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        >
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Experience
          </li>
        </a>



        <a
          href="#Projects"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        >
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Projects
          </li>
        </a>



        <a
          href="#Footer"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        >
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Contact
          </li>
        </a>

      </ul>

      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration- cursor-pointer"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      )}
      
    </nav>
  );
};

export default Navbar;
