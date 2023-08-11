import React from "react";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

const Links = [
  {
    id: 1,
    href: "https://www.linkedin.com/in/masab-bin-zia-411a0922a/",
    icon: <LinkedinIcon />,
  },
  {
    id: 2,
    href: "https://www.instagram.com/masab_mbz/",
    icon: <InstagramIcon />,
  },
  {
    id: 3,
    href: "https://twitter.com/hadescreeping",
    icon: <TwitterIcon />,
  },
  {
    id: 4,
    href: "https://github.com/MasabBinZia",
    icon: <GithubIcon />,
  },
];

const Credits = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-500 text-sm text-center sm:text-left">
          Made by{" "}
          <Link href="https://github.com/MasabBinZia">
            <span className="text-bold underline">Masab Bin Zia</span>
          </Link>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          {Links.map((link) => (
            <Link
              href={link.href}
              key={link.id}
              className="w-5 h-5 ml-3 text-gray-500"
            >
              {link.icon}
            </Link>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Credits;
