import { contacts } from "../Data";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="section bg-ghostWhite"
      id="contact"
    >
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Contact Me</h2>
        <div className="w-14 h-[3px] rounded-sm bg-teal-500"></div>
      </div>

      <div className="w-full h-screen grid place-items-center bg-ghostWhite">
        <div className="bg-white rounded-md shadow-md flex flex-row">
          {/* contact information form */}
          <div
            id="contact_info"
            className="bg-teal-500 p-8 md:hover:scale-y-110 rounded-md transition md:block w-[350px] h-[350px] md:w-[500px] sm:h-[500px]"
          >
            <div className="flex justify-between">
              {/* Page title */}
              <h2 className="text-white text-xl">Contact Informations</h2>
            </div>

            {/* Name */}

            <div className="mt-6 flex flex-row">
              <div>
                {/* Name icon img */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-ghostWhite mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-ghostWhite text-xs">Name :</h2>
                <p className="text-white text-xs">Xavier Owona</p>
              </div>
            </div>

            {/* Email */}

            <div className="mt-6 flex flex-row">
              <div>
                {/* email icon img */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-ghostWhite mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M17.834 6.166a8.25 8.25 0 100 11.668.75.75 0 011.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0121.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 11-.82-6.26V8.25a.75.75 0 011.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 00-2.416-5.834zM15.75 12a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-ghostWhite text-xs">Email :</h2>
                <p className="text-white text-xs">contact@owonafx.com</p>
              </div>
            </div>
            {/* Phone */}

            <div className="mt-6 flex flex-row">
              <div>
                {/* Phone icon img */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-ghostWhite mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-ghostWhite text-xs">Phone :</h2>
                <p className="text-white text-xs">+33-649-353-760</p>
              </div>
            </div>
            {/* Phone */}

            <div className="mt-6 flex flex-row">
              <div>
                {/* Location icon img */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-ghostWhite mr-2"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
              </div>
              <div>
                <h2 className="text-ghostWhite text-xs">Location :</h2>
                <p className="text-white text-xs">Metz - France (Luxembourg)</p>
              </div>
            </div>
          </div>

          {/* contact us form */}

          <div
            id="contact_us"
            className="px-6 py-8 w-[350px]  md:w-[500px] sm:h-[500px]"
          >
            <div className="flex justify-between">
              {/* Page title */}
              <h2 className="text-teal-500 text-xl">Get In Touch</h2>
            </div>
            <form method="POST" name="contact">
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human:
                  <input name="bot-field" />
                </label>
              </p>
              <input
                type="text"
                name="name"
                required=""
                placeholder="Enter Your Name"
                className="w-full text-xs px-3 h-10 my-2 outline-none rounded-md border focus:shadow-sm"
              />
              <br />
              <input
                type="text"
                name="email"
                required=""
                placeholder="Enter Your Email"
                className="w-full text-xs px-3 h-10 my-2 outline-none rounded-md border focus:shadow-sm"
              />
              <br />
              <input
                type="text"
                placeholder="Subject"
                className="w-full text-xs px-3 h-10 my-2 outline-none rounded-md border focus:shadow-sm"
              />
              <br />
              <textarea
                name="message"
                required=""
                placeholder="Enter Your Message Here"
                className="w-full text-xs px-3 py-2 h-32 my-2 outline-none rounded-md border focus:shadow-sm resize-none"
              ></textarea>
              <br />
              <button
                type="submit"
                className="px-4 py-2 w-full rounded-md text-white text-xs cursor-pointer hover:shadow-md bg-teal-500 transform transition duration-500 hover:scale-105"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
