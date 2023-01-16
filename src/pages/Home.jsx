import { useState } from "react";
import bgImg from "../assets/img/img_cv head_clean_headless2.png";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="section flex justify-center items-center" id="home">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <div
          className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full bg-gradient-to-r from-cyan-500 to-teal-500
         overflow-hidden shadow-heroSadow border-[20px] border-solid border-ghostWhite"
        >
          <motion.img
            initial={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.6 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={bgImg}
            alt="Fx Image"
            className="w-full h-full object-cover"
          />
        </div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          transition={{ duration: 0.9 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="text-grey sm:text-[1.25rem] mb-4 font-semibold">
            Golang Freelancer
          </div>
          <h2 className=" text-[2rem] sm:text-[3rem] font-bold mb-4">
            Xavier Owona
          </h2>
          <p className="text-base text-justify py-5 leading-8 md:text-xl max-w-2xl mx-auto md:py-8 dark:text-gray-200 opacity-80">
            A<span className="text-teal-500"> Freelancer </span>providing
            services based on
            <span className="text-teal-500"> Golang </span>
            technologies. Mainly passionate about web design and development of{" "}
            <span className="text-teal-500"> Go </span> based applications. Lets
            build solid and scalable products with great user experiences. Join
            me down below and lets get cracking!
          </p>
          <div className="flex mt-4 gap-4">
            <a
              href="../assets/docs/RESUME-FRANCOIS XAVIER OWONA.pdf"
              className="py-2 px-4 w-36 text-center border-[2px] border-solid border-teal-500 text-[0.9rem] rounded-[2.2rem] shadow-md"
              download
            >
              Download Cv
            </a>
            <a
              href="mailto:contact@owonafx.com"
              className="py-2 px-4 w-36 text-center border-[2px] border-solid bg-teal-500 border-teal-500 text-ghostWhite text-[0.9rem] rounded-[2.2rem] shadow-md"
              download
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
