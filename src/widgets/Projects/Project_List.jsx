import React, { useState } from "react";
import { projects } from "./projects";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

export default function Project_List() {
  return (
    <section id="SKILLS" className=" pl-10 sm:pl-20 lg:pl-32 pt-40 pb-44 dark:bg-darkbg bg-background pr-5">
      <div className="font-staat font-semibold text-htext dark:text-dhtext text-[40px] tracking-wider"># PROJECTS</div>
      <TabView />
    </section>
  );
}

const TabView = () => {
  const [activeTab, setActiveTab] = useState("fullstack");

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <div className=" mt-10  mb-10 w-fit">
        <div className="md:hidden">
          <select
            id="tabs"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => handleTabClick(e.target.value)}
          >
            {projects.map((project) => {
              return (
                <option value={project.id} key={project.id}>
                  {project.title}
                </option>
              );
            })}
          </select>
        </div>
        <ul className="hidden md:flex flex-row flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400 w-full">
          {projects.map((project) => {
            return (
              <li className="">
                <button
                  className={activeTab === project.id ? "active " : ""}
                  onClick={() => handleTabClick(project.id)}
                  class={`text-[14px] sm:text-[18px]  font-robo w-fit inline-flex items-center justify-center px-10 py-2 border-b-2 dark:border-t-0   hover:text-gray-600  dark:hover:text-dhtext transition duration-300 ${
                    activeTab === project.id
                      ? "active text-htext border-htext dark:text-dhtext dark:border-dhtext"
                      : "text-[#6B728E] dark:text-[#6890b5] border-transparent"
                  }`}
                >
                  <Icon
                    icon={project.logo}
                    className={`mr-3  text-[21px] ${
                      activeTab === project.id ? " text-htext  dark:text-dhtext " : "text-[#6B728E] dark:text-[#6890b5]"
                    }`}
                  />
                  {project.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="tab-content w-fit">
        {projects.map((project) => {
          return (
            activeTab === project.id && (
              <div className="flex flex-wrap gap-5">
                {project.content.map((content) => (
                  <NavLink
                    to={`/project/${project.id}/${content.pid}`}
                    className="w-fit flex items-center gap-8 dark:bg-dhtext bg-htext border-[1px]  border-dhtext dark:border-htext hover:shadow-sm dark:hover:shadow-dhtext hover:shadow-htext p-4 py-2 transition duration-500 hover:-translate-y-1"
                  >
                    <img src={content.logo} className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px]" />
                    <div>
                      <h2 className="text-[15px] md:text-[18px] tracking-wider font-staat text-background dark:text-darkbg ">{content.name}</h2>
                      <div className="text-[11px] md:text-sm flex flex-wrap dark:text-[#404258] text-[#b5b5b5] font-robo -mt-0.5 tracking-tight">
                        {content.short_description}
                      </div>
                    </div>
                  </NavLink>
                ))}
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};
