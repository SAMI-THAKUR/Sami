import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Data from "./skills";

const fadeInUp = {
  hidden: { opacity: 1, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Skills() {
  return (
    <section className="min-h-screen  p-5 sm:p-8">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-4xl sm:text-5xl font-tourney text-HEADING dark:text-darkHEADING mb-4"
          variants={fadeInUp}
          animate="visible"
          initial="hidden"
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          # SKILLS
        </motion.h2>
        <motion.p
          className="text-base sm:text-xl text-SUBTEXT dark:text-darkSUBTEXT mb-8 font-robo tracking-wider"
          variants={fadeInUp}
          animate="visible"
          initial="hidden"
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          My Tech Stack - always trying to learn new things...
        </motion.p>
        <motion.div className="grid grid-cols-4 gap-6" variants={staggerChildren} initial="hidden" animate="visible">
          {Data.map((category, index) => (
            <SkillCategory key={index} category={category} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SkillCategory({ category, index }) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const gridClasses = [
    "col-span-4 sm:col-span-2 md:col-span-2",
    "col-span-4 sm:col-span-2 md:col-span-2 md:row-span-2",
    "col-span-4 sm:col-span-2 md:col-span-2 md:row-span-2",
    "col-span-4 sm:col-span-2 md:col-span-2",
    "col-span-4 sm:col-span-4 md:col-span-2",
  ];

  return (
    <motion.div
      className={`bg-SBG dark:bg-darkSBG rounded-3xl p-6 overflow-hidden ${gridClasses[index]}`}
      variants={fadeInUp}
      animate="visible"
      initial="hidden"
      transition={{ duration: 0.4, delay: 0.4 }}
    >
      <h3 className="text-2xl sm:text-3xl tracking-wider font-tourney text-HEADING dark:text-darkHEADING mb-4">{category.title}</h3>
      <div className={`grid gap-5 grid-cols-2 sm:grid-cols-3`}>
        {category.content.map((skill, skillIndex) => (
          <SkillItem key={skillIndex} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

function SkillItem({ skill }) {
  return (
    <motion.a
      href={skill.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center justify-center p-3 bg-BG dark:bg-darkBG rounded-xl border-[1px] border-transparent hover:border-SUBTEXT dark:hover:border-darkSUBTEXT transition-all duration-500 overflow-hidden"
      whileTap={{ scale: 0.95 }}
    >
      <Icon
        icon={skill.img}
        className="text-2xl sm:text-4xl text-SUBTEXT dark:text-darkSUBTEXT opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
      />
      <span className="mt-2 text-sm sm:text-base text-center text-SUBTEXT dark:text-darkSUBTEXT font-robo tracking-wide group-hover:font-bold transition-all duration-500">
        {skill.name}
      </span>
    </motion.a>
  );
}
