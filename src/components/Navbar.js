import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faTwitter, faInstagram, faDiscord } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="py-8">
      <div className="container max-w-7xl flex justify-between items-center">
        <Link href="/">
          <Image
            src="/open_hack_day_logo.png"
            width={400}
            height={200}
            alt="OpenHackDay 2023 Logo"
            className="h-14 w-auto sm:h-10"
          />
        </Link>

        <div className="flex items-center gap-8 ">
          <p>
            <Link href="/projects" className="hover:text-manga-300">
              Projects
            </Link>
          </p>

          <ul className="flex items-center gap-4 sm:hidden">
            <li>
              <a href="https://github.com/gcsrilanka" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} className="h-5" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/GitHubCommunityLK" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="h-5" />
              </a>
            </li>

            <li>
              <a href="https://twitter.com/gcsrilanka" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="h-5" />
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/gcsrilanka/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="h-5" />
              </a>
            </li>

            <li>
              <a href="https://discord.gg/uR84QnAC" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faDiscord} className="h-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
