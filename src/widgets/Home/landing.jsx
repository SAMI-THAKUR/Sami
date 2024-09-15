import Typewriter from "typewriter-effect";
import { Icon } from "@iconify/react";

let ver = "Version 3.0";

function Landing() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: "./img/space.lottie",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section id="Home" className="pt-40 pb-28 flex flex-wrap justify-start pl-10 sm:pl-20 lg:pl-32 bg-background dark:bg-darkbg ">
      {/* ml-10 sm:ml-20 md:ml-36 lg:ml-44 */}
      <div id="text" className="w-max text-htext dark:text-dhtext flex flex-col justify-start">
        <div className="text-[15px] sm:text-[18px] font-robo  flex justify-start text-[#6B728E] dark:text-[#6890b5]">Hi, I am</div>
        <div className="text-[50px] sm:text-[95px] font-staat font-semibold tracking-wide flex justify-start -mt-2" id="name">
          SAMI THAKUR
        </div>
        <div className="font-robo text-[13px] sm:text-[18px] text-[#404258] dark:text-[#b5b5b5] flex justify-start mt-1">
          # THIS IS MY PORTFOLIO ...{ver} #
        </div>
        <div className="my-5 w-Full">
          <div className="grid gap-2  grid-cols-1 md:grid-cols-2 lg:grid-cols-3" id="accordion-collapse-body-1">
            <a
              href="https://link-tree-liart.vercel.app/"
              className="w-fit py-1 sm:py-2 px-3 flex border-[1px] border-htext dark:border-dhtext items-center cursor-pointer shadow-sm gap-2 hover:shadow-lg hover:shadow-gray-700 hover:border-transparent transition duration-500"
            >
              <div className="w-fit px-1 sm:px-2 shrink-0">
                <Icon icon="simple-icons:linktree" className="text-[25px] sm:text-[30px]" />
              </div>
              <div className="px-2">
                <p className="font-semibold text-sm sm:text-[18px]">LinkTree</p>
                <span className="text-gray-600 text-sm sm:text-[15px]">All my social links</span>
              </div>
            </a>
          </div>
        </div>
        <button
          className="w-fit   bg-htext dark:bg-dhtext dark:text-darkbg text-background text-[15px] sm:text-[18px]  p-4 py-3  mt-5 font-robo border-2 border-[#f8f8f8] dark:border-[#333333] hover:shadow-lg hover:shadow-gray-700  transition duration-500"
          id="CV"
          onClick={() => {
            window.open("https://drive.google.com/file/d/1gSpMsa17i5po57rYn0YMQTNIHFdrM7s0/view?usp=drive_link");
          }}
          // onClick="window.open('./img/RESUME.pdf')"
        >
          Check My Resume
        </button>
      </div>
    </section>
  );
}

export default Landing;
