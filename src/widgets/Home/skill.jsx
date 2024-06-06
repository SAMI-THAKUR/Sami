import { Icon } from "@iconify/react";

const Data = [
  {
    title: "Languages",
    content: [
      {
        name: "Python",
        img: "logos:python",
        link: "https://www.python.org/doc/essays/blurb/",
      },
      {
        name: "Java",
        img: "devicon:java",
        link: "https://www.javatpoint.com/java-language",
      },
      {
        name: "JavaScript",
        img: "logos:javascript",
        link: "https://javascript.info/intro",
      },
    ],
  },
  {
    title: "Machine Learning",
    content: [
      {
        name: "Numpy",
        img: "logos:numpy",
      },
      {
        name: "Pandas",
        img: "devicon:pandas",
      },
      {
        name: "Sci-Kit",
        img: "devicon:scikitlearn",
      },
    ],
  },
  {
    title: "BackEnd & DB",
    content: [
      {
        name: "NodeJS",
        img: "logos:nodejs-icon",
      },
      {
        name: "ExpressJS",
        img: "skill-icons:expressjs-dark",
      },
      {
        name: "Flask",
        img: "skill-icons:flask-light",
      },
      // {
      //   name: "Fast API",
      //   img: "devicon:fastapi",
      // },
      // {
      //   name: "FireBase",
      //   img: "src/assets/firebase.png",
      // },
      {
        name: "JWT",
        img: "logos:jwt-icon",
      },
      {
        name: "MongoDB",
        img: "skill-icons:mongodb",
      },
      {
        name: "MySQL",
        img: "skill-icons:mysql-dark",
      },
    ],
  },
  {
    title: "FrontEnd",
    content: [
      {
        name: "React",
        img: "vscode-icons:file-type-reactjs",
      },
      {
        name: "Redux",
        img: "logos:redux",
      },
      {
        name: "HTML",
        img: "skill-icons:html",
      },
      {
        name: "CSS",
        img: "skill-icons:css",
      },
      {
        name: "Tailwind",
        img: "logos:tailwindcss-icon",
      },
      {
        name: "Bootstrap",
        img: "skill-icons:bootstrap",
      },
    ],
  },
  {
    title: "Android",
    content: [
      {
        name: "Flutter UI",
        img: "vscode-icons:file-type-flutter",
      },
    ],
  },
];

function Skills() {
  return (
    <section id="SKILLS" className=" pl-10 sm:pl-20 lg:pl-32 py-10 pb-32 dark:bg-darkbg bg-background pr-5">
      <div className="font-staat font-semibold text-htext dark:text-dhtext text-[40px] tracking-wider"># SKILLS</div>
      <div className="font-robo font-normal  dark:text-dhtext text-[14px] sm:text-[18px] -mt-5">
        <br></br>
        My Tech Stack always tryin to learn new things...
      </div>
      {Data.map((value, index) => {
        return (
          <div key={index}>
            <div className="font-robo  text-htext dark:text-dhtext text-[17px] sm:text-xl font-extrabold mt-5">{value.title}</div>
            <div className="flex flex-wrap justify-start mr-10 lg:mr-24 mt-3 px-3 gap-5">
              {value.content.map((value, index) => {
                const { name, img, color } = value;
                return <Banner name={name} img={img} color={color} key={index} />;
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}

function Banner(props) {
  const { name, img, color } = props;
  return (
    <div
      key={name}
      className="cursor-pointer button flex flex-wrap justify-evenly w-fit max-w-xs px-4 xsm:px-5 py-[5px] sm:py-[4px] bg-transparent border-[1px] border-[#2C3333] dark:border-[#d6d6d6] hover:shadow-lg hover:shadow-gray-700 transition duration-500"
    >
      <Icon icon={`${img}`} className={`logo align-middle text-[23px] sm:text-[23px] font-extraboldbold h-full`} />
      <div className="text ms-5 sm:text-[18px] font-normal font-robo hidden xsm:inline-flex justify-center text-htext dark:text-[#d6d6d6]">
        {name}
      </div>
    </div>
  );
}

export default Skills;
