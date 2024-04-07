let projects = [
  {
    id: "frontend",
    title: "FRONTEND",
    logo: "el:screen",
    content: [
      {
        pid: "portfolio",
        name: "Portfolio",
        short_description:
          "Personal Portfolio website",
        logo: "src/assets/portfolio_logo.png",
        link: "",
        github: "",
        image: "portfolio_pic.png",
        tech_stack: [
          {
            icon: "mdi:react",
            link: "https://reactjs.org/",
          },
          {
            icon: "devicon-plain:reactrouter",
            link: "https://reactrouter.com/",
          },
          {
            icon: "ri:firebase-fill",
            link: "https://firebase.google.com/",
          },
          {
            icon: "simple-icons:css3",
            link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          },
          {
            icon: "simple-icons:tailwindcss",
            link: "https://tailwindcss.com/",
          },
        ],
        desc1:
          "My portfolio website is an online gallery where I display my creative projects and achievements. It's user-friendly and visually attractive, making it easy for visitors to navigate and discover my work.",
        desc2:
          "The goal of my portfolio website is to showcase my skills to others and generate chances for networking and career advancement. Through showcasing my top-notch work, I strive to establish confidence and reliability with potential clients and employers. Furthermore, the website acts as a medium for engaging with my audience and forming professional connections.",
      },
      {
        pid: "pixel",
        name: "Pixel_Resume~",
        short_description:
          "Interactive Text Resume",
        logo: "src/assets/pixel_logo.png",
        link: "https://pixel-resume.vercel.app/",
        github:
          "https://github.com/SAMI-THAKUR/terminal-resume",
        image: "pixel_pic.png",
        tech_stack: [
          {
            icon: "mdi:react",
            link: "https://reactjs.org/",
          },
          {
            icon: "akar-icons:redux-fill",
            link: "https://redux.js.org/",
          },
          {
            icon: "simple-icons:css3",
            link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          },
          {
            icon: "simple-icons:tailwindcss",
            link: "https://tailwindcss.com/",
          },
        ],
      },
    ],
  },
  {
    id: "backend",
    title: "FULLSTACK",
    logo: "icon-park-solid:terminal",
    content: [
      {
        name: "NodeJS",
      },
      {
        name: "ExpressJS",
      },
      {
        name: "JWT",
      },
      {
        name: "MongoDB",
      },
      {
        name: "MySQL",
      },
    ],
  },
  {
    id: "android",
    title: "Android",
    logo: "gridicons:phone",
    content: [
      {
        name: "Flutter UI",
      },
    ],
  },
  {
    id: 4,
    title: "DATA ANALYSIS",
    logo: "icon-park-outline:analysis",
    content: [
      {
        name: "Flutter UI",
      },
    ],
  },
];

export { projects };
