import { Icon } from "@iconify/react";

export default function Education() {
  return (
    <div className="bg-background dark:bg-darkbg pb-28 pl-20">
      <div className="font-staat font-semibold text-htext dark:text-dhtext text-[40px] tracking-wider mb-10">
        # EDUCATION
      </div>
      <ol className="items-center sm:flex ">
        <Li
          name="BE in Artificial Inetlligence at VESIT-Mumbai"
          time="2022 - 2026"
          percentage="CGPA: 8.5"
        ></Li>
        <Li
          name="HSC at Swami Vivekanand Jr. College"
          time="2020 - 2022"
          percentage="Percentage: 85%"
        ></Li>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-htext rounded-full ring-0 ring-white dark:bg-dhtext sm:ring-8 dark:ring-dsecondary shrink-0">
              <Icon
                icon="tdesign:education"
                className="text-lg text-background dark:text-darkbg"
              />
            </div>
          </div>
          <div className="mt-3 sm:pe-8 font-robo">
            <h3 className="text-xl font-semibold font-staat text-gray-900 dark:text-white tracking-widest">
              SSC at D.B.A.V English High School
            </h3>
            <time className="block mb-2 mt-1 text-base font-normal leading-none text-gray-400 dark:text-gray-500">
              2019 - 2020
            </time>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
              Percentage: 91.20%
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
}

function Li(props) {
  const { name, time, percentage } = props;
  return (
    <li className="relative mb-6 sm:mb-0">
      <div className="flex items-center">
        <div className="z-10 flex items-center justify-center w-6 h-6 bg-htext rounded-full ring-0 ring-white dark:bg-dhtext sm:ring-8 dark:ring-dsecondary shrink-0">
          <Icon
            icon="tdesign:education"
            className="text-lg text-white dark:text-darkbg "
          />
        </div>
        <div className="hidden sm:flex w-full bg-htext h-[1px] dark:bg-dhtext"></div>
      </div>
      <div className="mt-3 sm:pe-16 font-robo">
        <h3 className="text-xl font-semibold font-staat text-gray-900 dark:text-white tracking-widest">
          {name}
        </h3>
        <time className="block mb-2 mt-1 text-base font-normal leading-none text-gray-400 dark:text-gray-500">
          {time}
        </time>
        <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
          {percentage}
        </p>
      </div>
    </li>
  );
}
