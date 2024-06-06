import { iconExists } from "@iconify/react/dist/iconify.js";
import { Icons } from "../icons.js";
import { list } from "postcss";

let projects = [
  {
    id: "fullstack",
    title: "FULLSTACK",
    logo: "icon-park-solid:terminal",
    content: [
      {
        pid: "thread_clone",
        name: "Thread Clone",
        short_description: "Full Stack Thread Clone",
        logo: "/src/assets/thread-logo.png",
        link: "https://thread-clone-bjsq.vercel.app/",
        github: "https://github.com/SAMI-THAKUR/Thread_Clone",
        image: "thread_pic.png",
        tech_stack: [
          {
            icon: Icons.express,
            link: "https://expressjs.com/",
          },
          {
            icon: Icons.monog_db,
            link: "https://www.mongodb.com/docs/",
          },
          {
            icon: Icons.mongoose,
            link: "https://mongoosejs.com/docs/",
          },
          {
            icon: Icons.jwt,
            link: "https://jwt.io/",
          },
          {
            icon: Icons.react,
            link: "https://reactjs.org/",
          },
          {
            icon: Icons.redux,
            link: "https://redux.js.org/",
          },
          {
            icon: Icons.react_router,
            link: "https://reactrouter.com/",
          },
          {
            icon: Icons.tailwind,
            link: "https://tailwindcss.com/",
          },
        ],
        desc1:
          "I have developed a Full Stack Thread Clone that replicates the core functionalities of popular social media platforms, focusing on creating and managing threaded conversations. This project allows users to post, like, and engage in discussions seamlessly, providing a dynamic and interactive experience.",
        desc2:
          "The aim of this project is to demonstrate my proficiency in both front-end and back-end technologies, showcasing my ability to build full-stack applications from scratch.",
      },
    ],
  },
  // {
  //   id: "ml",
  //   title: "MACHINE LEARNING",
  //   logo: "oui:ml-regression-job",
  //   content: [],
  // },
  {
    id: "frontend",
    title: "FRONTEND",
    logo: "el:screen",
    content: [
      {
        pid: "portfolio",
        name: "Portfolio",
        short_description: "Personal Portfolio website",
        logo: "src/assets/portfolio_logo.png",
        link: "",
        github: "",
        image: "portfolio_pic.png",
        tech_stack: [
          {
            icon: Icons.react,
            link: "vscode-icons:file-type-reactjs",
          },
          {
            icon: Icons.react_router,
            link: "https://reactrouter.com/",
          },
          {
            icon: Icons.firebase,
            link: "https://firebase.google.com/",
          },
          {
            icon: Icons.css,
            link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          },
          {
            icon: Icons.tailwind,
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
        short_description: "Interactive Text Resume",
        logo: "/src/assets/pixel_logo.png",
        link: "https://pixel-resume.vercel.app/",
        github: "https://github.com/SAMI-THAKUR/terminal-resume",
        image: "pixel_pic.png",
        tech_stack: [
          {
            icon: Icons.react,
            link: "https://reactjs.org/",
          },
          {
            icon: Icons.redux,
            link: "https://redux.js.org/",
          },
          {
            icon: Icons.css,
            link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          },
          {
            icon: Icons.tailwind,
            link: "https://tailwindcss.com/",
          },
        ],
        desc1:
          "ReactJS, Tailwind CSS, and Redux have been used to create an extraordinary portfolio website that looks like a terminal interface. Therefore, instead of the conventional web layout, my portfolio allows visitors to interact with it as if they were working on command-line interfaces.",
        desc2:
          "The reason behind developing this terminal-based website is to make it memorable and distinct when people try exploring what I do. This unique interface has not only helped me show off my projects and skills but also demonstrated how proficient I am in modern technologies",
      },
      {
        pid: "currency",
        name: "Xchange",
        short_description: "Real-Time Currency Tool",
        logo: "/src/assets/xchange_logo.png",
        link: "https://currency-exchange-rate-six.vercel.app/",
        github: "https://currency-exchange-rate-six.vercel.app/",
        image: "xchange_pic.png",
        tech_stack: [
          {
            icon: Icons.react,
            link: "https://reactjs.org/",
          },
          {
            icon: Icons.redux,
            link: "https://redux.js.org/",
          },
          {
            icon: Icons.rapid,
            link: "https://www.exchangerate-api.com/docs/standard-requests",
          },
          {
            icon: Icons.css,
            link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          },
          {
            icon: Icons.tailwind,
            link: "https://tailwindcss.com/",
          },
        ],
        desc1:
          "Xchange is a real-time currency conversion tool that allows users to convert one currency to another. It provides the latest exchange rates for various currencies and enables users to calculate the equivalent amount in a different currency.",
        desc2:
          "The primary goal of this project is to help users quickly and easily convert currencies without having to search for exchange rates manually. By providing up-to-date information and a user-friendly interface.",
      },
      {
        pid: "linktree",
        name: "Linktree",
        short_description: "Personal Networking Hub",
        logo: "/src/assets/link_logo.png",
        link: "https://link-tree-liart.vercel.app/",
        github: "https://github.com/SAMI-THAKUR/LINK_TREE",
        image: "link_pic.png",
        tech_stack: [
          {
            icon: Icons.react,
            link: "https://reactjs.org/",
          },
          {
            icon: Icons.css,
            link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          },
          {
            icon: Icons.tailwind,
            link: "https://tailwindcss.com/",
          },
        ],
        desc1:
          "I have created a LinkTree project that acts as a central hub for all my social media links. It serves as a digital business card, providing easy access for visitors to my various online profiles, including Instagram, Twitter, LinkedIn, and more. With just one click, anyone can navigate through my LinkTree and connect with me across different platforms.",
        desc2:
          "The aim of this project is to simplify the sharing and accessing of my social media presence. Rather than having to search for each individual profile.",
      },
    ],
  },
  {
    id: "da",
    title: "DATA ANALYSIS",
    logo: "icon-park-outline:analysis",
    content: [
      {
        pid: "phone_sales",
        name: "Phone Sales",
        short_description: "Interactive Sales Dashboard",
        logo: "/src/assets/phone_sales_logo.png",
        link: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fraw.githubusercontent.com%2FSAMI-THAKUR%2FSALES_DASHBOARD_EXCEL%2Fmain%2FSales.xlsx&wdOrigin=BROWSELINK",
        github: "https://github.com/SAMI-THAKUR/SALES_DASHBOARD_EXCEL",
        image: "phone_sales_pic.png",
        tech_stack: [
          {
            icon: Icons.excel,
            link: "https://www.microsoft.com/en-in/microsoft-365/excel",
          },
        ],
        desc1:
          "I have created an Interactive Excel Phone Sale Dashboard that serves as a comprehensive tool for analyzing and visualizing phone sales data. This dashboard allows users to interact with the data through dynamic charts, pivot tables, and slicers, providing a clear and detailed overview of sales.",
        desc2:
          "The aim of this project is to simplify the process of sales data analysis, making it accessible even to those with minimal technical expertise.",
      },
    ],
  },
];

export { projects };
