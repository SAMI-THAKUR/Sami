import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
const fadeInUp = {
  hidden: { opacity: 1, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Position() {
  return (
    <motion.div
      className="col-span-4 md:col-span-2 bg-SBG dark:bg-darkSBG rounded-3xl p-6 overflow-hidden"
      variants={fadeInUp}
      animate="visible"
      initial="hidden"
      transition={{ duration: 0.4, delay: 0.4 }}
    >
      <h3 className="text-2xl font-tourney text-HEADING dark:text-darkHEADING mb-4"># CURRENT POSITION</h3>
      <motion.div
        className="bg-BG dark:bg-darkBG rounded-xl p-4 relative overflow-hidden"
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <h4 className="text-xl font-robo font-semibold text-HEADING dark:text-darkHEADING mb-2">Secretary of AI CoLegion</h4>
        <p className="text-base font-robo text-SUBTEXT dark:text-darkSUBTEXT mb-4">
          Currently serving as the Secretary, where I coordinate events, manage communications, and facilitate collaborations within the AI community
          at VESIT.
        </p>
        <div className="flex items-center gap-2 text-sm font-robo text-SUBTEXT dark:text-darkSUBTEXT">
          <Icon icon="ph:calendar" className="text-xl" />
          <span>2023 - Present</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
