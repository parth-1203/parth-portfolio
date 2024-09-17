import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = ({openLink}) => {

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex-grow"></div>
      <div className="m-8 flex items-center justify-end gap-4 text-2xl">
        <a
          onClick={() => {openLink("https://www.linkedin.com/in/parth-nagdev/")}}
          className="cursor-pointer"
        >
          <FaLinkedin />
        </a>
        <a
          onClick={() => {openLink("https://github.com/parth-1203")}}
          className="cursor-pointer"
        >
          <FaGithub />
        </a>
        <a
          onClick={() => {openLink("https://leetcode.com/u/parth_1207/")}}
          className="cursor-pointer"
        >
          <SiLeetcode />
        </a>
        <a
          href="mailto:parthnagdev03@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
