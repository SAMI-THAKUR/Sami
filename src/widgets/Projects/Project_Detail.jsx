import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { NavLink, useParams } from "react-router-dom";
import { projects } from "./projects";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ProductDetail() {
  const { id, pid } = useParams();
  const project = projects.find((project) => project.id === id);
  const content = project.content.find((content) => content.pid === pid);

  return (
    <section className="min-h-screen  p-3 sm:p-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div className="grid grid-cols-4 gap-4" variants={staggerChildren} initial="hidden" animate="visible">
          <BackButton />
          <ProjectTitle name={content.name} />
          <ProjectImage image={content.image} />
          <ProjectLinks link={content.link} github={content.github} />
          <ProjectDescription desc1={content.desc1} desc2={content.desc2} />
          <TechStack techStack={content.tech_stack} />
        </motion.div>
      </div>
    </section>
  );
}

function BackButton() {
  return (
    <motion.div className="col-span-4 mb-4" variants={fadeInUp}>
      <NavLink
        to="/project"
        className="inline-flex items-center px-4 py-2 bg-SBG dark:bg-darkSBG rounded-xl border-[1px] border-transparent hover:border-HEADING dark:hover:border-darkHEADING transition-colors duration-300"
      >
        <Icon icon="ion:caret-back" className="mr-2" />
        <span className="font-medium">Back to Projects</span>
      </NavLink>
    </motion.div>
  );
}

function ProjectTitle({ name }) {
  return (
    <motion.div className="col-span-4 bg-SBG dark:bg-darkSBG rounded-3xl p-6" variants={fadeInUp}>
      <h1 className="text-3xl md:text-4xl font-tourney text-HEADING dark:text-darkHEADING">{name}</h1>
    </motion.div>
  );
}

function ProjectImage({ image }) {
  return (
    <motion.div className="col-span-4 md:col-span-2 row-span-2 bg-SBG dark:bg-darkSBG rounded-3xl overflow-hidden" variants={fadeInUp}>
      <img className="w-full h-full object-cover" src={`/assets/${image}`} alt="Project Preview" />
    </motion.div>
  );
}

function ProjectLinks({ link, github }) {
  return (
    <motion.div className="col-span-4 md:col-span-2 row-span-1 bg-SBG dark:bg-darkSBG rounded-3xl p-6 font-robo" variants={fadeInUp}>
      <h2 className="text-xl font-bold text-HEADING dark:text-darkHEADING mb-4 tracking-widest">Project Links</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex text-lg font-semibold items-center justify-center px-4 py-2 bg-HEADING dark:bg-darkHEADING text-BG dark:text-darkBG rounded-md hover:opacity-80 transition-opacity duration-300"
          >
            <Icon icon="akar-icons:link-out" className="mr-2" />
            Live Demo
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex text-lg font-semibold  items-center justify-center px-4 py-2 bg-HEADING dark:bg-darkHEADING text-BG dark:text-darkBG rounded-md hover:opacity-80 transition-opacity duration-300"
          >
            <Icon icon="bi:github" className="mr-2" />
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
}

function TechStack({ techStack }) {
  return (
    <motion.div className="col-span-4 order-3 md:order-4 md:col-span-2 row-span-1 bg-SBG dark:bg-darkSBG rounded-3xl p-6" variants={fadeInUp}>
      <h2 className="text-xl font-bold text-HEADING dark:text-darkHEADING mb-4 font-robo tracking-widest">Tech Stack</h2>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <a
            key={index}
            href={tech.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center p-3 rounded-2xl bg-BG dark:bg-darkBG text-SUBTEXT dark:text-darkSUBTEXT border-[1px] border-transparent hover:border-HEADING dark:hover:border-darkHEADING transition-colors duration-300"
          >
            <Icon icon={tech.icon} className="text-3xl" />
          </a>
        ))}
      </div>
    </motion.div>
  );
}

function ProjectDescription({ desc1, desc2 }) {
  return (
    <motion.div className="col-span-4 order-4 md:order-3 md:col-span-2 row-span-2  bg-SBG dark:bg-darkSBG rounded-3xl p-6" variants={fadeInUp}>
      <h2 className="text-xl font-bold text-HEADING dark:text-darkHEADING mb-4 font-robo tracking-widest">Project Overview</h2>
      <div className="space-y-4 text-SUBTEXT dark:text-darkSUBTEXT font-robo tracking-wide">
        <p>{desc1}</p>
        <p>{desc2}</p>
      </div>
    </motion.div>
  );
}
