import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import useTheme from "../../context/useTheme";

const version = "version 3.0.1";

const fadeIn = {
  hidden: { opacity: 1, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Landing() {
  const [isVisible, setIsVisible] = useState(false);
  const { theme, darkTheme, lightTheme } = useTheme();
  const toggle = () => {
    if (theme === "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  };
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen bg-BG dark:bg-darkBG p-3 sm:p-8 ">
      <div className="container m-auto max-w-8xl">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 auto-rows-fr m-auto">
          {/* ---------------------------------- Main intro section -------------------------*/}
          <motion.div
            className="order-1 col-span-2 row-span-3 bg-SBG dark:bg-darkSBG rounded-3xl p-6 flex flex-col justify-center"
            variants={fadeIn}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <div className="space-y-1 lg:-space-y-2">
              <h2 className="text-base lg:text-lg   text-HEADING font-medium dark:text-darkHEADING tracking-widest font-tourney">Hi, I am</h2>
              <h1 className="text-heading sm:text-5xl lg:text-heading tracking-wide font-tourney text-HEADING dark:text-darkHEADING">SAMI THAKUR</h1>
              <h2 className="text-base  lg:text-lg text-SUBTEXT  dark:text-darkSUBTEXT tracking-widest font-robo">This is my Portfolio {version}</h2>
            </div>
          </motion.div>

          {/* --------------------------------------------- ABOUT section ----------------------------------------------*/}
          <motion.div
            className="group/about order-2 col-span-1 row-span-2 sm:col-span-1 sm:row-span-2 relative  bg-SBG dark:bg-darkSBG rounded-3xl border-[1px] border-transparent hover:border-HEADING dark:hover:border-darkHEADING transition-all duration-300 overflow-hidden"
            variants={fadeIn}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <NavLink to="about" className="relative flex flex-col justify-end h-full p-4">
              {/* Text and Icon */}
              <div className="flex justify-between align-middle w-full">
                <span className="text-HEADING dark:text-darkHEADING text-xl md:text-3xl font-tourney h-fit group-hover/about:font-bold transition-all duration-700">
                  ABOUT
                </span>
                {/* Icon that changes on hover */}
                <Icon
                  icon="clarity:avatar-line"
                  className="text-SUBTEXT dark:text-darkSUBTEXT md:text-gray-500 md:dark:text-gray-500 text-2xl self-center transition-all duration-700 group-hover/about:text-SUBTEXT group-hover/about:scale-110 dark:group-hover/about:text-darkSUBTEXT"
                />
              </div>

              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src="assets\about.png" // Ensure forward slashes
                  alt="Resume"
                  className="h-full w-full object-cover rounded-3xl opacity-20 skills-hover group-hover/about:opacity-30 group-hover/about:scale-105 transition-all duration-700"
                />
              </div>
            </NavLink>
          </motion.div>

          {/* -------------------------------------- Social Icons section ------------------------------------- */}
          <motion.div
            className="order-8 sm:order-3 sm:col-span-1 col-span-2 row-span-1 sm:row-span-2 flex flex-col self-start justify-center lg:h-full"
            variants={fadeIn}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <div className="grid  grid-cols-6 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 sm:gap-2 h-fit lg:h-full w-full order-2">
              <SocialIcon href="https://link-tree-liart.vercel.app/" icon="simple-icons:linktree" />
              <SocialIcon href="https://github.com/SAMI-THAKUR" icon="akar-icons:github-fill" />
              <SocialIcon href="https://www.linkedin.com/in/sami-thakur-6072b8256/" icon="akar-icons:linkedin-fill" />
              <SocialIcon href="https://mail.google.com/mail/?view=cm&fs=1&to=sami.thakur7860@gmail.com" icon="material-symbols:mail-outline" />
              <SocialIcon href="https://leetcode.com/u/SamiThakur/" icon="cib:leetcode" />
              <SocialIcon href="https://www.instagram.com/sami_thakur_/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" icon="akar-icons:instagram-fill" />
            </div>
          </motion.div>

          {/* --------------------------------------- Resume section -------------------------------------------- */}
          <motion.NavLink
            to="/contact"
            className="group/resume order-3 sm:order-5 col-span-1 row-span-1 sm:col-span-1 relative group  bg-SBG dark:bg-darkSBG rounded-3xl border-[1px] border-transparent hover:border-HEADING dark:hover:border-darkHEADING transition-all duration-300 overflow-hidden"
            variants={fadeIn}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <motion.div
              className="absolute inset-0"
              variants={fadeIn}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ duration: 0.7, delay: 0.4 }}
            />
            <div className="relative flex flex-col items-center justify-between h-full p-4">
              {/* Heading and Icon */}
              <div className="flex justify-between items-center w-full">
                <span className="text-HEADING dark:text-darkHEADING  text-xl md:text-3xl font-tourney h-fit group-hover/resume:font-bold transition-all duration-700">
                  RESUME
                </span>
              </div>
              <Icon
                icon="formkit:filedoc"
                className="text-SUBTEXT dark:text-darkSUBTEXT md:text-gray-500 md:dark:text-gray-500 text-2xl transition-all duration-700 group-hover/resume:scale-110 group-hover/skills:text-SUBTEXT dark:group-hover/resume:text-darkSUBTEXT self-end"
              />
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                <img
                  src="assets/resume.png" // Change backslashes to forward slashes for proper path
                  alt="Resume"
                  className="h-full w-full object-cover rounded-3xl opacity-10 skills-hover group-hover/resume:opacity-20 group-hover/resume:scale-105 transition-all duration-700" // Adjust opacity for better visibility
                />
              </div>
            </div>
          </motion.NavLink>
          {/* --------------------------------------------- Skills section ----------------------------------------------*/}
          <motion.div
            className="group/skills col-span-1 row-span-2 sm:col-span-1 sm:row-span-2 relative group order-5 bg-SBG dark:bg-darkSBG rounded-3xl border-[1px] border-transparent hover:border-HEADING dark:hover:border-darkHEADING transition-all duration-300 overflow-hidden"
            variants={fadeIn}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <NavLink to="/skills" className="relative flex flex-col items-center justify-between h-full p-4">
              {/* Heading and Icon */}
              <div className="flex justify-between items-center w-full">
                <span className="text-HEADING dark:text-darkHEADING  text-xl md:text-3xl font-tourney h-fit group-hover/skills:font-bold transition-all duration-700">
                  MY TECH STACK
                </span>
              </div>

              <Icon
                icon="ph:stack-light"
                className="text-SUBTEXT dark:text-darkSUBTEXT md:text-gray-500 md:dark:text-gray-500 text-2xl transition-all duration-700  group-hover/skills:scale-110 group-hover/skills:text-SUBTEXT dark:group-hover/skills:text-darkSUBTEXT self-end"
              />
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                <img
                  src="assets/stack.png" // Change backslashes to forward slashes for proper path
                  alt="Resume"
                  className="h-full w-full object-cover rounded-3xl opacity-10 skills-hover group-hover/skills:opacity-20 group-hover/skills:scale-105 transition-all duration-700" // Adjust opacity for better visibility
                />
              </div>
            </NavLink>
          </motion.div>

          {/* Photo */}
          <motion.div
            className="group/work order-1 sm:order-4 col-span-2 row-span-3 sm:row-span-3 sm:col-span-1 relative group  bg-SBG dark:bg-darkSBG rounded-3xl  "
            variants={fadeIn}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <img src="assets\profile-pic_bg.png" alt="Resume" className="h-full w-full object-cover" />
          </motion.div>

          {/* Projects */}
          <motion.div
            to="/contact"
            className="group/project order-5 sm:order-3 col-span-1 row-span-2 sm:col-span-1 relative group  bg-SBG dark:bg-darkSBG rounded-3xl border-[1px] border-transparent hover:border-HEADING dark:hover:border-darkHEADING transition-all duration-300 overflow-hidden"
            variants={fadeIn}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <NavLink to="/project" className="relative flex flex-col items-center justify-between h-full p-4">
              {/* Heading and Icon */}
              <div className="flex justify-between items-center w-full">
                <span className="text-HEADING dark:text-darkHEADING  text-xl md:text-3xl font-tourney h-fit group-hover/project:font-bold transition-all duration-700">
                  PROJECTS
                </span>
              </div>

              <Icon
                icon="material-symbols-light:folder-outline"
                className="text-SUBTEXT dark:text-darkSUBTEXT md:text-gray-500 md:dark:text-gray-500 text-2xl transition-all duration-700 group-hover/project:text-SUBTEXT dark:group-hover/project:text-darkSUBTEXT group-hover/project:scale-110  self-end"
              />
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                <img
                  src="assets/project.png" // Change backslashes to forward slashes for proper path
                  alt="Resume"
                  className="h-full w-full object-cover rounded-3xl opacity-10 group-hover/project:opacity-20 group-hover/project:scale-105 transition-all duration-700" // Adjust opacity for better visibility
                />
              </div>
            </NavLink>
          </motion.div>

          {/* Toggle */}
          <motion.button
            onClick={toggle}
            className="group/theme col-span-2 order-1 sm:order-5 sm:col-span-1 row-span-1 p-4 flex items-center justify-center dark:bg-darkSBG bg-SBG rounded-3xl border-[1px] border-transparent hover:border-HEADING dark:hover:border-darkHEADING transition-all duration-300 overflow-hidden"
            variants={fadeIn}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ duration: 0.3, delay: 0.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-full">
              <div className="flex gap-10 justify-center sm:justify-between items-center">
                <span className="dark:text-darkHEADING text-HEADING text-3xl font-tourney group-hover/theme:font-bold transition-all duration-700">
                  {theme === "dark" ? "LIGHT THEME" : "DARK THEME"}
                </span>
                <Icon
                  icon={theme === "dark" ? "ph:sun-bold" : "ph:moon-bold"}
                  className="dark:text-SUBTEXT text-darkSUBTEXT md:text-gray-500 md:dark:text-gray-500 text-3xl transition-all duration-700 group-hover/theme:text-SUBTEXT dark:group-hover/theme:text-darkSUBTEXT group-hover/theme:scale-105 self-center"
                />
              </div>
            </div>
          </motion.button>
          {/* --------------------------------------- Certification -------------------------------------------- */}
          <motion.div
            to="/contact"
            className="group/resume order-5 sm:order-6 col-span-1 row-span-1 sm:col-span-1 relative group  bg-SBG dark:bg-darkSBG rounded-3xl border-[1px] border-transparent hover:border-HEADING dark:hover:border-darkHEADING transition-all duration-300 overflow-hidden"
            variants={fadeIn}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <NavLink to="certificate" className="relative flex flex-col items-center justify-between h-full p-4">
              {/* Heading and Icon */}
              <div className="flex justify-between items-center w-full">
                <span className="text-HEADING dark:text-darkHEADING  text-xl md:text-3xl font-tourney h-fit group-hover/resume:font-bold transition-all duration-700">
                  Certification
                </span>
              </div>

              <Icon
                icon="carbon:certificate"
                className="text-SUBTEXT dark:text-darkSUBTEXT md:text-gray-500 md:dark:text-gray-500 text-2xl transition-all duration-700 group-hover/resume:scale-110 group-hover/skills:text-SUBTEXT dark:group-hover/resume:text-darkSUBTEXT self-end"
              />
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                <img
                  src="assets/certificate.png" // Change backslashes to forward slashes for proper path
                  alt="Resume"
                  className="h-full w-full object-cover rounded-3xl opacity-10 skills-hover group-hover/resume:opacity-20 group-hover/resume:scale-105 transition-all duration-700" // Adjust opacity for better visibility
                />
              </div>
            </NavLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="aspect-square h-fit group flex items-center justify-center bg-SBG dark:bg-darkSBG rounded-2xl border-[1px] border-transparent  hover:border-HEADING dark:hover:border-darkHEADING transition-all duration-300"
    >
      <Icon icon={icon} className="text-2xl sm:text-3xl text-HEADING dark:text-darkHEADING group-hover:scale-105 transition-all duration-300" />
    </a>
  );
}
