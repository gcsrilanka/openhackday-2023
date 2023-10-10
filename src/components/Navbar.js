import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faTwitter, faInstagram, faDiscord } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="container max-w-7xl py-4 flex items-center justify-between">
      <Link href="/">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faGithub} className="h-8" />
          <h1 className="text-xl font-bold">OpenHackDay Sri Lanka - 2023 - Leaderboard</h1>
        </div>
      </Link>

      <ul className="flex items-center gap-4">
        <li>
          <a href="https://github.com/GitHubExperts-LK" target="_blank" rel="noreferrer">
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
    </nav>
  );
};

export default Navbar;
