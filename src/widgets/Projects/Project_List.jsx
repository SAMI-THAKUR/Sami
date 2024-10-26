import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import { projects } from "./projects"; // Ensure this imports your updated projects array

const fadeInUp = {
  hidden: { opacity: 1, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Project_List() {
  const [filter, setFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const allProjects = projects.flatMap((category) => category.content.map((project) => ({ ...project, category: category.id })));

    setFilteredProjects(filter === "all" ? allProjects : allProjects.filter((project) => project.category === filter));
  }, [filter]);

  return (
    <section className="min-h-screen  p-3 sm:p-0">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-4xl sm:text-5xl font-tourney text-HEADING dark:text-darkHEADING mb-8"
          variants={fadeInUp}
          animate="visible"
          initial="hidden"
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          # PROJECTS
        </motion.h2>

        <ProjectFilters filter={filter} setFilter={setFilter} />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
          variants={fadeInUp}
          animate="visible"
          initial="hidden"
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.pid} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectFilters({ filter, setFilter }) {
  const filters = [
    { id: "all", name: "All Projects", icon: "carbon:grid" },
    ...projects.map((category) => ({
      id: category.id,
      name: category.title,
      icon: category.logo,
    })),
  ];

  return (
    <div className="flex flex-wrap justify-center gap-5 mb-8">
      {filters.map((f) => (
        <motion.button
          key={f.id}
          onClick={() => setFilter(f.id)}
          className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
            filter === f.id
              ? "border-HEADING dark:border-darkHEADING border-[1px] text-HEADING dark:text-darkHEADING bg-BG dark:bg-darkSBG shadow-md"
              : "bg-SBG dark:bg-darkSBG text-SUBTEXT dark:text-darkSUBTEXT border-[1px] border-transparent hover:border-HEADING dark:hover:border-darkHEADING transition-all duration-300"
          }`}
          whileTap={{ scale: 0.95 }}
          variants={fadeInUp}
          animate="visible"
          initial="hidden"
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          <Icon icon={f.icon} className="mr-2 text-xl" />
          {f.name}
        </motion.button>
      ))}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.div
      layout
      animate="visible"
      initial="hidden"
      transition={{ duration: 0.4, delay: 0.4 }}
      className="bg-SBG dark:bg-darkSBG rounded-xl overflow-hidden shadow-lg"
    >
      <NavLink to={`/project/${project.category}/${project.pid}`} className="block h-full">
        <motion.div className="flex flex-col h-full p-6" transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-BG dark:bg-darkBG flex items-center justify-center shadow-md">
              <img src={project.logo} alt={project.name} className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-semibold text-HEADING dark:text-darkHEADING font-tourney">{project.name}</h3>
          </div>
          <p className="text-base text-SUBTEXT dark:text-darkSUBTEXT flex-grow mb-2 font-robo tracking-wider">{project.short_description}</p>

          <motion.div className="flex items-center text-HEADING dark:text-darkHEADING" whileHover={{ x: 3 }}>
            <span className="mr-2 text-base font-medium font-robo tracking-wider">View Details</span>
            <Icon icon="carbon:arrow-right" className="text-xl" />
          </motion.div>
        </motion.div>
      </NavLink>
    </motion.div>
  );
}
