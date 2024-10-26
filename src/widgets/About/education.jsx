import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const fadeInUp = {
  hidden: { opacity: 1, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Education() {
  const educationData = [
    {
      name: "BE in Artificial Intelligence",
      institution: "VESIT-Mumbai",
      time: "2022 - 2026",
      percentage: "CGPA: 9.4",
    },
    {
      name: "HSC",
      institution: "Swami Vivekanand Jr. College",
      time: "2020 - 2022",
      percentage: "Percentage: 89%",
    },
    {
      name: "SSC",
      institution: "D.B.A.V English High School",
      time: "2019 - 2020",
      percentage: "Percentage: 91.20%",
    },
  ];

  return (
    <>
      <motion.div
        className="col-span-4 md:col-span-2 md:row-span-3 bg-SBG dark:bg-darkSBG rounded-3xl p-6 overflow-hidden"
        variants={fadeInUp}
        animate="visible"
        initial="hidden"
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <h2 className="text-3xl sm:text-4xl font-tourney text-HEADING dark:text-darkHEADING mb-4"># EDUCATION</h2>
        <motion.div className="grid grid-cols-1 gap-7" variants={staggerChildren}>
          {educationData.map((edu, index) => (
            <EducationItem key={index} {...edu} />
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}

function EducationItem({ name, institution, time, percentage }) {
  return (
    <motion.div className="bg-BG dark:bg-darkBG rounded-xl p-4">
      <div className="flex items-center gap-2 mb-2">
        <Icon icon="carbon:education" className="text-2xl text-HEADING dark:text-darkHEADING" />
        <h3 className="text-lg font-robo font-semibold text-HEADING dark:text-darkHEADING">{name}</h3>
      </div>
      <p className="text-base font-robo  text-SUBTEXT dark:text-darkSUBTEXT">{institution}</p>
      <p className="text-base font-robo  font-semibold text-HEADING dark:text-darkHEADING ">{percentage}</p>
      <p className="text-sm font-robo  text-SUBTEXT dark:text-darkSUBTEXT mt-2">{time}</p>
    </motion.div>
  );
}
