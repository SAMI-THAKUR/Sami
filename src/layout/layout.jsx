import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { Outlet, Link } from "react-router-dom";
import Footer from "./footer";
import useTheme from "../context/useTheme";

const fadeIn = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 1, transition: { duration: 0.3 } },
};

const Layout = () => {
  const { theme, darkTheme, lightTheme } = useTheme();

  const toggle = () => {
    if (theme === "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="layout"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={fadeIn}
        className="flex flex-col min-h-screen bg-BG dark:bg-darkBG"
      >
        <header className="py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link to="/">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
                <Icon
                  icon="iconoir:home"
                  className="text-3xl sm:text-[40px] text-SUBTEXT dark:text-darkSUBTEXT hover:text-HEADING dark:hover:text-darkHEADING hover:scale-105 transition-colors duration-500 cursor-pointer"
                />
              </motion.div>
            </Link>
            <motion.button
              id="theme-toggle"
              onClick={toggle}
              type="button"
              className="ml-5 bg-darkBG dark:bg-BG rounded-full text-sm p-3 md:p-4 duration-500 hover:-translate-y-1 transition-all"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              {theme === "light" ? (
                <Icon icon="ph:moon-bold" className="text-darkHEADING text-xl" />
              ) : (
                <Icon icon="ph:sun-bold" className="text-HEADING text-xl" />
              )}
            </motion.button>
          </div>
        </header>

        <main className="flex-grow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
              <Outlet />
            </motion.div>
          </div>
        </main>

        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Layout;
