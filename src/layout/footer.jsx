import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <>
      <div
        id="credits"
        className="py-5 px-3"
      >
        <div className=" text-background dark:text-darkbg sm:mt-8 flex flex-wrap gap-5 sm:gap-7 justify-center">
          {/*---Github---*/}
          <a
            href="https://github.com/SAMI-THAKUR"
            target="_blank"
          >
            <Icon
              icon="mdi:github"
              className=" text-background dark:text-[#B4B4B3] text-[30px] sm:text-[35px] font-light hover:text-[#211F1F] transition duration-500 hover:scale-105"
            />
          </a>
          {/*---Leetcode---*/}
          <a
            href="https://leetcode.com/SAMI_THAKUR/"
            target="_blank"
          >
            <Icon
              icon="tabler:brand-leetcode"
              className=" text-background dark:text-[#B4B4B3] text-[30px] sm:text-[35px] font-light hover:text-[#FFA116] transition duration-500 hover:scale-105"
            />
          </a>
          {/*---Linkedin---*/}
          <a
            href="https://www.linkedin.com/in/sami-thakur-6072b8256/"
            target="_blank"
          >
            <Icon
              icon="mdi:linkedin"
              className=" text-background dark:text-[#B4B4B3] text-[30px] sm:text-[35px] font-light hover:text-[#0A66C2] transition duration-500 hover:scale-105"
            />
          </a>
          {/*---Twitter---*/}
          <a
            href="https://twitter.com/home?lang=en-in"
            target="_blank"
          >
            <Icon
              icon="mdi:twitter"
              className=" text-background dark:text-[#B4B4B3] text-[30px] sm:text-[35px] font-light hover:text-[#1DA1F2] transition duration-500 hover:scale-105"
            />
          </a>
          {/*---Mail---*/}
          <a
            href="mailto:2022.sami.thakur@ves.ac.in"
            target="_blank"
          >
            <Icon
              icon="tabler:mail-filled"
              className=" text-background dark:text-[#B4B4B3] text-[30px] sm:text-[35px] font-light hover:text-[#D44638] transition duration-500 hover:scale-105"
            />
          </a>
          {/*---Instagram---*/}
          <a
            href="https://www.instagram.com/sami_thakur_/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
            target="_blank"
          >
            <Icon
              icon="mdi:instagram"
              className=" text-background dark:text-[#B4B4B3] text-[30px] sm:text-[35px] font-light hover:text-[#C13584] transition duration-500 hover:scale-105"
            />
          </a>
        </div>
        <div className="text-red-500 mt-5 flex flex-wrap gap-10 justify-center text-[20px] sm:text-[30px] font-staat tracking-wider">
          Desing & Developed by
          &lt;/SAMI&gt;
        </div>
      </div>
    </>
  );
};

export default Footer;
