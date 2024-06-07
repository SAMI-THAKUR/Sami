import { projects } from "./projects";
import { NavLink, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function ProductDetail() {
  const { id, pid } = useParams();
  const project = projects.find((project) => project.id === id);
  const content = project.content.find((content) => content.pid === pid);

  return (
    <section className=" pl-10 sm:pl-20 lg:pl-32 py-36 pb-10 dark:bg-darkbg bg-background pr-10">
      <div class="max-w-xl mx-auto">
        <NavLink to="/project">
          <div class="flex  gap-1 mb-6 align-middle cursor-pointer">
            <Icon icon="ion:caret-back" className="text-base text-[#404258] dark:text-[#b5b5b5] flex align-middle my-auto" />
            <h1 class="font-mono  tracking-wide text-[18px]   max-w-sm text-[#404258] dark:text-[#b5b5b5]">Projects</h1>
          </div>
        </NavLink>
        <div class="flex items-start justify-between mb-6 align-middle">
          <h1 class="font-staat  tracking-wide- md:text-4xl text-2xl mt-1 sm:mt-0   max-w-sm dark:text-dhtext text-htext">{content.name}</h1>

          <div className="flex flex-wrap mt-2 align-middle">
            {content.link && (
              <a
                href={content.link}
                target="_blank"
                class="dark:bg-primary-bg bg-secondary-bg dark:text-white text-zinc-700 border border-transparent rounded-md px-3 py-2 cursor-pointer hover:border-htext dark:hover:border-dhtext  transition duration-200"
              >
                <Icon icon="akar-icons:link-out" className="text-xl sm:text-2xl text-htext dark:text-dhtext" />
              </a>
            )}
            {content.github && (
              <a
                href={content.github}
                target="_blank"
                class="dark:bg-primary-bg bg-secondary-bg dark:text-white text-zinc-700 border border-transparent rounded-md px-3 py-2 cursor-pointer hover:border-htext dark:hover:border-dhtext  transition duration-200"
              >
                <Icon icon="bi:github" className="text-xl sm:text-2xl text-htext dark:text-dhtext" />
              </a>
            )}
          </div>
        </div>

        <figure className="max-w-lg flex items-center justify-center">
          <img
            className="h-auto max-w-full  border-[1px] dark:border-dhtext border-htext mt-1 p-2 object-cover "
            src={`/public/assets/${content.image}`}
          ></img>
        </figure>
        <div className="mt-6 dark:text-zinc-400 text-zinc-600 leading-relaxed">
          <div className="font-staat font-semibold text-htext dark:text-dhtext text-[30px] tracking-wider">Tech Stack</div>
          <div className="flex flex-wrap mb-4 -ml-3">
            {content.tech_stack.map((tech, index) => {
              return (
                <a
                  href={tech.link}
                  target="_blank"
                  key={index}
                  class="dark:bg-primary-bg bg-secondary-bg border border-transparent rounded-md px-3 py-2 cursor-pointer hover:border-htext dark:hover:border-dhtext hover:-translate-y-0.5 transition duration-200"
                >
                  <Icon icon={tech.icon} className="text-[25px] text-[#404258] dark:text-[#b5b5b5] hover:text-htext dark:hover:text-dhtext" />
                </a>
              );
            })}
          </div>
          <div className="font-staat font-semibold text-htext dark:text-dhtext text-[30px] tracking-wider">Overview</div>
          <p className="mt-2 mb-6 font-robo text-[12px] sm:text-[15px] tracking-wide text-[#404258] dark:text-[#b5b5b5]">{content.desc1}</p>
          <p className="mt-2 mb-6 font-robo text-[12px] sm:text-[15px] tracking-wide text-[#404258] dark:text-[#b5b5b5]">{content.desc2}</p>
        </div>
      </div>
    </section>
  );
}
