import Image from "next/image";
import { GitBranch } from "lucide-react";
import Countdown from "./components/Countdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

import Leaderboard from "./components/Leaderboard";

const HomePage = async () => {
  return (
    <main className="container max-w-7xl my-8">
      <section className="flex gap-12">
        <div className="w-full flex-1 space-y-12">
          <Image src="/hf10_horz_fcl_cmyk.png" width={1032} height={600} alt="Hacktoberfest 2023 Logo" />

          <div className="flex gap-4 mt-6">
            <Countdown />
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">OpenHackDay Sri Lanka</h1>
          <p>
            The following leaderboard shows the top github contributors of OpenHackDay Sri Lanka 2023. You can join this
            leaderboard by sending a Pull Request to any repository within following Organizations.
          </p>

          <ul className="list-disc list-inside my-4 ml-4">
            <li>GitHub Community Sri Lanka</li>
            <li>SLIIT FOSS Community</li>
            <li>NSBM FOSS Community</li>
            <li>J'pura FOSS Community</li>
            <li>UCSC Mozilla Club</li>
            <li>IEEE Student Branch of IIT</li>
          </ul>
          <p>Scores will automatically updates when merging a Pull request.</p>

          <div className="flex gap-2 my-2 items-center w-fit text-red-700 border border-red-700 rounded-lg text-sm px-5 py-2.5 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 select-none">
            <GitBranch height={16} />
            <p>1 merged PR = 10 Points</p>
          </div>
        </div>
      </section>

      <Leaderboard />

      <section className="py-10 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Make Your Contribution</h2>
        <p>
          Small experiments, inspired inventions, and the software everyone depends on—the code you write on GitHub can
          reach one codebase or millions.
        </p>

        <div className="mt-8 flex items-center justify-center">
          <a href="https://discord.com/invite/XGKsuazjk7" target="_blank" rel="noopener noreferrer">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-tr from-bavarianred-200 to-bavarianblue-200 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:outline-none">
              <span className="relative flex items-center gap-2 px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <FontAwesomeIcon icon={faDiscord} className="h-4" />
                Join The Discord
              </span>
            </button>
          </a>

          <a
            href="https://education.github.com/discount_requests/student_application"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-manga-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:outline-none">
              <span className="relative flex items-center gap-2 px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <FontAwesomeIcon icon={faGithub} className="h-4" />
                Get GitHub Student Pack
              </span>
            </button>
          </a>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
