import { motion } from "framer-motion";
import { projects } from "../Data";

function Projects(props) {
  return (
    <div className={`w-full h-full  ${props.darkMode ? "dark" : ""}`}>
      <div className="dark:bg-gray-800">
        <div className="section" id="projects">
          <div className="mb-8">
            <h2 className="font-jamjuree text-2xl md:text-3xl font-bold dark:text-ghostWhite">
              Projects
            </h2>
            <div className="w-14 h-[3px] rounded-sm bg-gradient-to-r from-cyan-500 to-teal-500"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-20">
            {projects.map(
              ({
                id,
                image,
                demo,
                liveLink,
                github,
                title,
                desc,
                tech1,
                tech2,
                tech3,
                tech4,
              }) => {
                return (
                  <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="card w-80 mx-auto sm:w-96 bg-base-100 shadow-xl"
                    key={id}
                  >
                    <figure>
                      <img src={image} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                      </h2>
                      <p>{desc}</p>
                      <div className="card-actions justify-center py-5">
                        <a
                          href={liveLink}
                          className="py-2 px-4 w-36 text-center border-[2px] border-solid border-teal-500 text-[0.9rem] rounded-[2.2rem] shadow-md transform transition duration-500 hover:scale-105"
                          target="_blank"
                        >
                          Live Demo
                        </a>
                        <a
                          href={github}
                          className="py-2 px-4 w-36 text-center border-[2px] border-solid bg-teal-500 border-teal-500 text-ghostWhite text-[0.9rem] rounded-[2.2rem] shadow-md transform transition duration-500 hover:scale-105"
                          target="_blank"
                        >
                          GitHub
                        </a>
                      </div>
                      <div className="grid grid-cols-4 gap-3 place-items-center w-36 mx-auto">
                        <img src={tech1} alt="" className="w-8 h-8" />
                        <img src={tech2} alt="" className="w-8 h-8" />
                        <img src={tech3} alt="" className="w-8 h-8" />
                        <img src={tech4} alt="" className="w-8 h-8" />
                      </div>
                    </div>
                  </motion.div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
