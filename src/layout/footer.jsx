import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import { socials } from "../widgets/socials";

const Footer = () => {
  return (
    <footer className="bg-htext dark:bg-dhtext shadow pb-1">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center mb-6 text-base font-staat tracking-wide font-medium dark:text-[#404258] text-[#b5b5b5] sm:mb-0 ">
            <li>
              <NavLink to="/" className=" hover:underline me-4 md:me-6 transition duration-300">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="about" className=" hover:underline  me-4 md:me-6 transition duration-300">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="project" className=" hover:underline  me-4 md:me-6 transition duration-300">
                Project
              </NavLink>
            </li>
            <li>
              <NavLink to="contact" className=" hover:underline  me-4 md:me-6 transition duration-300">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between align-middle">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            <div className="text-red-500 mt-5 flex flex-wrap gap-10 align-middle text-[15px] sm:text-[20px] font-staat tracking-wider">
              Desing & Developed by &lt;/SAMI&gt;
            </div>
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 align-middle gap-5">
            {socials.map((social, index) => {
              return (
                <a
                  href={social.url}
                  className="text-gray-500 hover:text-dhtext dark:hover:text-htext transition duration-300 "
                  target="_blank"
                  key={index}
                >
                  <Icon icon={social.logo} className="text-2xl sm:text-[27px]" />
                  <span class="sr-only">{social.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
