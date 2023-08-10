import React from "react";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
const Credits = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-500 text-sm text-center sm:text-left">
          <Link href={"https://github.com/MasabBinZia"}>
            Made by <span className="text-bold underline">Masab Bin Zia</span>
          </Link>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <Link
            href={"https://www.linkedin.com/in/masab-bin-zia-411a0922a/"}
            className="w-5 h-5 ml-3 text-gray-500"
          >
            <LinkedinIcon />
          </Link>
          <Link
            href={"https://www.instagram.com/masab_mbz/"}
            className="w-5 h-5 ml-3 text-gray-500"
          >
            <InstagramIcon />
          </Link>
          <Link
            href={"https://twitter.com/hadescreeping"}
            className="w-5 h-5 ml-3 text-gray-500"
          >
            <TwitterIcon />
          </Link>
          <Link
            href={"https://github.com/MasabBinZia"}
            className="w-5 h-5 ml-3 text-gray-500"
          >
            <GithubIcon />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Credits;
