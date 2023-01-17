import { navLinks } from "../Data";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillSkype,
  AiFillYoutube,
} from "react-icons/ai";
function Footer() {
  const curDate = new Date();

  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded ">
      <div className="grid grid-flow-col gap-4">
        {navLinks.map((navlink) => {
          return (
            <div key={navlink.id}>
              <a
                href={navlink.href}
                className="grid grid-flow-col gap-4 hover:text-teal-500 duration-1000"
              >
                {navlink.text}
              </a>
            </div>
          );
        })}
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.linkedin.com/in/francois-xavier-owona-63258531/"
            className="hover:text-teal-500 duration-1000"
            target="_blank"
          >
            <AiFillLinkedin className="h-8 w-8" />
          </a>
          <a
            href="https://github.com/fxfrancky/"
            className="hover:text-teal-500 duration-700"
            target="_blank"
          >
            <AiFillGithub className="h-8 w-8" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCt_8wpSh7_cva2AI7eaNVIw"
            className="hover:text-teal-500 duration-1000"
            target="_blank"
          >
            <AiFillYoutube className="h-8 w-8" />
          </a>
          <a
            href="skype:fxjonathan?call"
            className="hover:text-teal-500 duration-1000"
            target="_blank"
          >
            <AiFillSkype className="h-8 w-8" />
          </a>
        </div>
      </div>
      <div>
        <p>
          Copyright © {curDate.getFullYear()} - All right reserved by Francois
          Xavier OWONA
        </p>
      </div>
    </footer>
  );
}

export default Footer;
