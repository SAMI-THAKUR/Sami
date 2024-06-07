import { socials } from "../socials";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <section class=" dark:bg-darkbg bg-background pr-5 pt-16 h-[650px]" id="contact">
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div class="">
          <div class=" max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <h2 class="font-heading mb-4 font-staat tracking-wide text-gray-900 dark:text-white text-3xl sm:text-5xl">Get in Touch</h2>
            <p class="mx-auto mt-4 max-w-xl text-[13px] sm:text-[16px] font-robo  text-[#404258] dark:text-[#b5b5b5] ">
              Thank you for visiting my portfolio site. I truly appreciate your time and interest in my work.
            </p>
            <p class="mx-auto mt-8 max-w-lg text-[13px] sm:text-[16px] font-robo  text-[#404258] dark:text-[#b5b5b5]">
              Connect with me on social media or send me a message
            </p>
            <div className="flex flex-wrap my-4 mt-8 mb-4 justify-center gap-7">
              {socials.map((social, index) => {
                return (
                  <a
                    href={social.url}
                    className="text-gray-500 hover:text-htext dark:hover:text-dhtext transition duration-300 hover:-translate-y-1"
                    target="_blank"
                    key={index}
                  >
                    <Icon icon={social.logo} className="text-2xl sm:text-[35px]" />
                    <span class="sr-only">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
