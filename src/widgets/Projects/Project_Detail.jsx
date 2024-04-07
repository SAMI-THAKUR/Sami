import { projects } from "./projects";
import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function ProductDetail() {
  const { id, pid } = useParams();
  const project = projects.find(
    (project) => project.id === id,
  );
  const content = project.content.find(
    (content) => content.pid === pid,
  );

  return (
    <section
      id="SKILLS"
      className=" pl-10 sm:pl-20 lg:pl-32 py-36 pb-10 dark:bg-darkbg bg-background pr-10"
    >
      <div class="max-w-xl mx-auto">
        <div class="flex items-start justify-between mb-2">
          <h1 class="font-staat  tracking-wide- sm:text-5xl text-3xl mb-4 max-w-sm dark:text-dhtext text-htext">
            {content.name}
          </h1>
          <div className="flex flex-wrap mt-2">
            {content.link && (
              <a
                href={content.link}
                target="_blank"
                class="dark:bg-primary-bg bg-secondary-bg dark:text-white text-zinc-700 border border-transparent rounded-md px-3 py-2 cursor-pointer hover:border-zinc-700"
              >
                <Icon
                  icon="akar-icons:link-out"
                  className="text-2xl text-htext dark:text-dhtext"
                />
              </a>
            )}
            {content.github && (
              <a
                href={content.github}
                target="_blank"
                class="dark:bg-primary-bg bg-secondary-bg dark:text-white text-zinc-700 border border-transparent rounded-md px-3 py-2 cursor-pointer hover:border-zinc-700"
              >
                <Icon
                  icon="bi:github"
                  className="text-2xl text-htext dark:text-dhtext"
                />
              </a>
            )}
          </div>
        </div>

        <figure className="max-w-lg flex items-center justify-center">
          <img
            className="h-auto max-w-full  border-[1px] dark:border-dhtext border-htext mt-1 p-2 object-cover "
            src={`/src/assets/${content.image}`}
          ></img>
        </figure>
        <div className="mt-6 dark:text-zinc-400 text-zinc-600 leading-relaxed">
          <div className="font-staat font-semibold text-htext dark:text-dhtext text-[30px] tracking-wider">
            Tech Stack
          </div>
          <div className="flex flex-wrap mb-4 -ml-3">
            {content.tech_stack.map(
              (tech, index) => {
                return (
                  <a
                    href={tech.link}
                    target="_blank"
                    key={index}
                    class="dark:bg-primary-bg bg-secondary-bg border border-transparent rounded-md px-3 py-2 cursor-pointer hover:border-zinc-700"
                  >
                    <Icon
                      icon={tech.icon}
                      className="text-[23px] text-[#404258] dark:text-[#b5b5b5]"
                    />
                  </a>
                );
              },
            )}
          </div>
          <div className="font-staat font-semibold text-htext dark:text-dhtext text-[30px] tracking-wider">
            Overview
          </div>
          <p className="mt-2 mb-6 font-robo text-[12px] sm:text-[15px] tracking-wide text-[#404258] dark:text-[#b5b5b5]">
            {content.desc1}
          </p>
          <p className="mt-2 mb-6 font-robo text-[12px] sm:text-[15px] tracking-wide text-[#404258] dark:text-[#b5b5b5]">
            {content.desc2}
          </p>
        </div>
      </div>
    </section>
  );
}
