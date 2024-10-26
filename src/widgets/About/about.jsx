import React from "react";
import { motion } from "framer-motion";
import Education from "./education";
import Position from "./posn";

const fadeInUp = {
  hidden: { opacity: 1, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  return (
    <section className="min-h-screen p-3 sm:p-0">
      <div className="container mx-auto max-w-6xl">
        <motion.div className="grid grid-cols-4 gap-4" variants={staggerChildren} initial="hidden" animate="visible">
          <Info />
          <Education />
          <Position />
        </motion.div>
      </div>
    </section>
  );
}

function Info() {
  return (
    <motion.div
      className="col-span-4 md:col-span-2 md:row-span-2 bg-SBG dark:bg-darkSBG rounded-3xl p-6 overflow-hidden"
      variants={fadeInUp}
      animate="visible"
      initial="hidden"
      transition={{ duration: 0.4, delay: 0.4 }}
    >
      <h2 className="text-3xl sm:text-4xl font-tourney text-HEADING dark:text-darkHEADING mb-4"># ABOUT ME</h2>
      <div className="flex flex-col md:flex-row items-center gap-6 ">
        <motion.img
          src="./assets/profile-pic_light.png"
          alt="Profile Picture"
          className="w-48 h-48 md:w-56 md:h-56 rounded-3xl object-cover dark:bg-darkBG"
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        />
        <motion.p className="text-sm sm:text-base text-SUBTEXT dark:text-darkSUBTEXT font-robo tracking-wide">
          Hello, I'm Sami, a third-year AI and Data Science student at VESIT, Mumbai. Proficient in Full Stack Web Development with a solid grasp of
          Java and machine learning. Currently expanding my knowledge in Deep Learning and Generative AI while actively solving LeetCode problems
          (rating: 1550).
        </motion.p>
      </div>
    </motion.div>
  );
}
