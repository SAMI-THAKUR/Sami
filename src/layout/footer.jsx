import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import { socials } from "../widgets/socials";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <motion.footer className="bg-SBG dark:bg-darkSBG shadow-lg">
      <div className="w-full max-w-screen-xl mx-auto p-6 md:py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <nav>
            <ul className="flex flex-wrap items-center gap-4 text-base font-robo tracking-wide font-medium text-SUBTEXT dark:text-darkSUBTEXT">
              {["Home", "About", "Project", "Contact"].map((item) => (
                <li key={item}>
                  <NavLink
                    to={item === "Home" ? "/" : item.toLowerCase()}
                    className="hover:text-HEADING dark:hover:text-darkHEADING transition duration-300"
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-4 items-center">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                className="text-SUBTEXT dark:text-darkSUBTEXT hover:text-HEADING dark:hover:text-darkHEADING transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon icon={social.logo} className="text-2xl sm:text-3xl" />
                <span className="sr-only">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
        <motion.hr className="my-6 border-SUBTEXT/20 dark:border-darkSUBTEXT/20" variants={fadeInUp} />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-HEADING dark:text-darkHEADING text-lg sm:text-2xl font-robo tracking-wider">
            Designed & Developed by <span className="text-red-500 font-tourney">&lt;/SAMI&gt;</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
