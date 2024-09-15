export default function Info() {
  return (
    <div className="bg-background dark:bg-darkbg relative flex  pt-28 pb-18 px-10 pl-5 md:pl-32">
      <div className="relative  h-full px-4  pb-20   md:pb-10 sm:max-w-xl md:max-w-full  lg:max-w-screen-xl lg:px-8">
        <div className="flex  flex-col-reverse items-start justify-between lg:flex-row py-5 lg:py-16">
          <div className=" relative  lg:max-w-xl">
            <div className="lg:pr-5 relative z-40">
              <p className=" text-[14px] sm:text-[17px] text-[#404258] dark:text-[#b5b5b5] font-robo tracking-wide mt-5">
                Hello, my name is Sami. I am a third-year engineering student at VESIT (Mumbai), majoring in Artificial Intelligence and Data Science.
                Over the past two years, I've developed a strong proficiency in Full Stack Web Development, having completed several projects that
                showcase my skills in building comprehensive applications. I have a solid grasp of core Java and am well-versed in machine learning
                algorithms. Currently, I am actively solving LeetCode problems, with a rating of 1550, and am expanding my knowledge in Deep Learning
                and Generative AI.
              </p>
            </div>
          </div>
          <div className="sm:ml-10 lg:ml-32 lg:block lg:w-1/2 flex items-center ">
            <div className="justify-center flex">
              <img src="./assets/profile-pic.png" width={350} height={350} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
