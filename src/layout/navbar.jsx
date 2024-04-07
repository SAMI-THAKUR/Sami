import React from "react";
import useTheme from "../context/useTheme";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const DarkIcon = () => {
  return <i className="fa-solid fa-moon w-4 h-4 text-lg rounded-full"></i>;
};

const LightIcon = () => {
  return <i className="fa-solid fa-sun w-4 h-4 text-lg rounded-full"></i>;
};

const NavBar = () => {
  const { theme, darkTheme, lightTheme } = useTheme();

  const toggle = () => {
    if (theme === "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  };
  const [open, setopen] = useState(false);

  function openNav() {
    setopen(!open);
  }

  return (
    <nav
      className="fixed w-full top-0  gap-y-2 bg-secondary  dark:bg-dsecondary duration-500 z-50  border-b-2 border-htext dark:border-gray-800 shadow-xl"
      id="nav"
    >
      <div
        className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5"
        id="container"
      >
        <button
          id="theme-toggle"
          onClick={toggle}
          type="button"
          className="ml-5 text-htext dark:text-dhtext hover:bg-htext hover:text-background  dark:hover:bg-dhtext dark:hover:text-darkbg rounded-full text-sm p-3 md:p-4 hover:shadow-htext border-htext dark:border-dhtext border-2 duration-500 hover:-translate-y-1"
        >
          {theme === "light" ? <LightIcon /> : <DarkIcon />}
        </button>
        <button
          id="lines"
          onClick={openNav}
          type="button"
          className="inline-flex items-center p-3 w-10 h-10 justify-center text-5xl  rounded-lg md:hidden text-htext dark:text-dhtext dark:hover:bg-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <i className="fa-solid fa-bars w-5 h-5 text-2xl"></i>
        </button>
        <div
          className={`w-full md:block md:w-auto ${open ? "block" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="font-extrabold font-robo tracking-wider text-[14px] flex flex-col p-3 md:p-0 mt-8  bg- md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-background dark:bg-darkbg dark:md:bg-transparent md:bg-transparent gap-5">
            <li className="py-0">
              <NavLink
                to="/"
                className="block py-2 px-2 text-htext dark:text-dhtext nav mt-0"
              >
                Home
              </NavLink>
            </li>
            <li className="py-0">
              <NavLink
                to="about"
                className="block py-2 px-2 text-htext dark:text-dhtext nav mt-0"
              >
                About
              </NavLink>
            </li>
            <li className="py-0">
              <NavLink
                to="project"
                className="block py-2 px-2 text-htext dark:text-dhtext nav mt-0"
              >
                Project
              </NavLink>
            </li>
            <li className="p-3 bg-htext hover:bg-background dark:hover:bg-darkbg dark:bg-dhtext dark:hover:text-dhtext hover:text-htext text-background dark:text-darkbg duration-300 hover:border-htext dark:hover:border-dhtext border-2">
              <NavLink to="contact">Contact Me</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
