import { motion } from "framer-motion";
import aboutImg from "../assets/img/img_cv_logo_clean.svg";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillSkype,
  AiFillYoutube,
} from "react-icons/ai";

function About() {
  return (
    <div className="section overflow-hidden" id="about">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">About Me</h2>
        <div className="w-14 h-[3px] rounded-sm bg-gradient-to-r from-cyan-500 to-teal-500"></div>
      </div>
      <div className="hero  pt-24">
        <div className="hero-content flex-col md:flex-row-reverse gap-14 ">
          <motion.img
            initial={{ x: 150, opacity: 0 }}
            transition={{ duration: 0.6 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={aboutImg}
            className="w-56 sm:w-80 max-w-sm rounded-lg shadow-2xl bg-gradient-to-r from-cyan-500 to-teal-500"
          />
          <motion.div
            initial={{ x: -350, opacity: 0 }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h4 className="text-[1.5rem] md:text-2xl font-semibold">
              Here is a{" "}
              <span className="underline decoration-[#14b8a5]/50">little</span>{" "}
              background
            </h4>
            <p className="p text-justify">
              Here is a little bit about me. I have been coding for more than 7
              years now. Generally for large corporations. I like to keep it
              simple and this is the main reason that I like coding in{" "}
              <span className="text-teal-500"> Golang </span>. I focus a lot on
              crafting clean and testable code based on common design patterns.
              I started my career by developping{" "}
              <span className="text-teal-500"> Java JEE </span> applications. Am
              looking to develop <span className="text-teal-500"> Go </span>{" "}
              based applications with any mix of the technology listed In my
              skills section.
            </p>

            <h4 className="text-[1.5rem] md:text-2xl font-semibold py-8">
              Lets stay in{" "}
              <span className="underline decoration-[#14b8a5]/50">touch</span>{" "}
            </h4>
            {/* Socials Section */}
            <div className="text-4xl flex gap-8 sm:gap-14 py-3 text-gray-600">
              <a
                href="https://www.linkedin.com/in/francois-xavier-owona-63258531/"
                className="hover:text-teal-500 duration-1000 ease-in-out"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/fxfrancky/"
                className="hover:text-teal-500 duration-1000"
                target="_blank"
              >
                <AiFillGithub />
              </a>
              <a
                href="skype:fxjonathan?call"
                className="hover:text-teal-500 duration-1000"
                target="_blank"
              >
                <AiFillSkype />
              </a>
              <a
                href="https://www.youtube.com/channel/UCt_8wpSh7_cva2AI7eaNVIw"
                className="hover:text-teal-500 duration-1000"
                target="_blank"
              >
                <AiFillYoutube />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
