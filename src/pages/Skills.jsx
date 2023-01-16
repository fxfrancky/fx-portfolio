import { motion } from "framer-motion";
import htmlImg from "../assets/img/skills/html-1.svg";
import css3Img from "../assets/img/skills/css-3.svg";
import javascriptImg from "../assets/img/skills/javascript-1.svg";
import reactImg from "../assets/img/skills/react-2.svg";
import tailwindImg from "../assets/img/skills/tailwind-css-2.svg";
import gitImg from "../assets/img/skills/git-icon.svg";
import vsCodeImg from "../assets/img/skills/visual-studio-code-1.svg";
import intellijImg from "../assets/img/skills/intellij-idea-1.svg";
import goImg from "../assets/img/skills/go-8.svg";
import dockerImg from "../assets/img/skills/docker.svg";
import javaImg from "../assets/img/skills/java-14.svg";
import postgresqlImg from "../assets/img/skills/postgresql.svg";
import kafkaImg from "../assets/img/skills/kafka.svg";
import websocketImg from "../assets/img/skills/websocket.svg";
import grpcImg from "../assets/img/skills/grpc-stacked-color.svg";
import linuxImg from "../assets/img/skills/tux.svg";

function Skills() {
  return (
    <div id="skills" className="section snap-start overflow-hidden">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">My Skills</h2>
        <div className="w-14 h-[3px] rounded-sm bg-gradient-to-r from-cyan-500 to-teal-500"></div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex relative flex-col text-center md:text-left lg:flex-row max-w-[2000px] 
      lg:px-10 min-h-screen justify-center lg:space-y-0 mx-auto items-center "
      >
        {/* Main Skills Container  */}

        {/* <div className="container max-w-6xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-y-14 gap-x-10 py-20"> */}
        <div className="container max-w-4xl mx-auto py-10 ">
          {/* Main Frontend Skills Container  */}
          <div className="py-20">
            <div>
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="skills-left grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-10 mb-14"
              >
                <div className="skills_data">
                  <div className="skills_blob">
                    <img src={htmlImg} alt="Skill image" />
                  </div>

                  <h3 className="skills_name">HTML</h3>
                  <span className="skills_subtitle">Advanced</span>
                </div>
                <div className="skills_data">
                  <div className="skills_blob">
                    <img src={css3Img} alt="Skill image" />
                  </div>

                  <h3 className="skills_name">CSS</h3>
                  <span className="skills_subtitle">Advanced</span>
                </div>
                <div className="skills_data">
                  <div className="skills_blob">
                    <img src={javascriptImg} alt="Skill image" />
                  </div>

                  <h3 className="skills_name">JavaSript</h3>
                  <span className="skills_subtitle">Advanced</span>
                </div>
                <div className="skills_data">
                  <div className="skills_blob">
                    <img src={reactImg} alt="Skill image" />
                  </div>

                  <h3 className="skills_name">React</h3>
                  <span className="skills_subtitle">Intermediate</span>
                </div>
                <div className="skills_data">
                  <div className="skills_blob">
                    <img src={tailwindImg} alt="Skill image" />
                  </div>

                  <h3 className="skills_name">Tailwind Css</h3>
                  <span className="skills_subtitle">Intermediate</span>
                </div>
                <div className="skills_data">
                  <div className="skills_blob">
                    <img src={gitImg} alt="Skill image" />
                  </div>

                  <h3 className="skills_name">Git</h3>
                  <span className="skills_subtitle">Advanced</span>
                </div>
                <div className="skills_data">
                  <div className="skills_blob">
                    <img src={vsCodeImg} alt="Skill image" />
                  </div>

                  <h3 className="skills_name">Vs Code</h3>
                  <span className="skills_subtitle">Advanced</span>
                </div>
                <div className="skills_data">
                  <div className="skills_blob">
                    <img src={intellijImg} alt="Skill image" />
                  </div>

                  <h3 className="skills_name">Intellij</h3>
                  <span className="skills_subtitle">Advanced</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="skills-right grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-10"
              >
                <div className="skills_data">
                  <div className="skills_blob">
                    <img src={goImg} alt="Skill image" />
                  </div>

                  <h3 className="skills_name">Golang</h3>
                  <span className="skills_subtitle">Intermediate</span>
                </div>
                <div className="skills_data">
                  <div className="skills_blob">
                    <img src={dockerImg} alt="Skill image" />
                  </div>

                  <h3 className="skills_name">Docker</h3>
                  <span className="skills_subtitle">Advanced</span>
                </div>
                <div className="skills_data">
                  <div className="skills_blob">
                    <img src={javaImg} alt="Skill image" />
                  </div>

                  <h3 className="skills_name">Java</h3>
                  <span className="skills_subtitle">Advanced</span>
                </div>
                <div className="skills_data">
                  <div className="skills_blob">
                    <img src={postgresqlImg} alt="Skill image" />
                  </div>

                  <h3 className="skills_name">PostGreSQL</h3>
                  <span className="skills_subtitle">Intermediate</span>
                </div>
                <div className="skills_data">
                  <div className="skills_blob">
                    <img src={kafkaImg} alt="Skill image" />
                  </div>

                  <h3 className="skills_name">Kafka</h3>
                  <span className="skills_subtitle">Intermediate</span>
                </div>
                <div className="skills_data">
                  <div className="skills_blob">
                    <img src={websocketImg} alt="Skill image" />
                  </div>

                  <h3 className="skills_name">Websocket</h3>
                  <span className="skills_subtitle">Intermediate</span>
                </div>

                <div className="skills_data">
                  <div className="skills_blob">
                    <img src={grpcImg} alt="Skill image" />
                  </div>

                  <h3 className="skills_name">Grpc</h3>
                  <span className="skills_subtitle">Intermediate</span>
                </div>
                <div className="skills_data">
                  <div className="skills_blob">
                    <img src={linuxImg} alt="Skill image" />
                  </div>

                  <h3 className="skills_name">Linux</h3>
                  <span className="skills_subtitle">Intermediate</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;
