import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialBar = () => {
  const socials = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: "https://facebook.com",
      bg: "bg-[#3b5998]",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com",
      bg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: "https://twitter.com",
      bg: "bg-[#1da1f2]",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      url: "https://youtube.com",
      bg: "bg-[#ff0000]",
    },
  ];

  return (
    <div className="fixed top-1/3 left-0 z-50 flex flex-col space-y-3">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center overflow-hidden w-[45px] hover:w-[160px] transition-all duration-300 rounded-r-full pr-4 pl-3 py-2 text-white ${social.bg}`}
        >
          <span className="text-xl">{social.icon}</span>
          <span className="ml-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {social.name}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialBar;
