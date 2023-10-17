import { GitBranch } from "lucide-react";
import React from "react";

const ProjectsPage = () => {
  return (
    <main className="container max-w-7xl my-8">
      <h1 className="text-4xl font-bold mb-4">Accepted Projects & Organizations</h1>

      <p>
        The following leaderboard shows the top github contributors of OpenHackDay Sri Lanka 2023. You can join this
        leaderboard by sending a Pull Request to any repository within following Organizations.
      </p>

      <ul className="list-disc list-inside my-4 ml-4">
        <li>GitHub Community Sri Lanka</li>
        <li>SLIIT FOSS Community</li>
        <li>NSBM FOSS Community</li>
        <li>J&apos;pura FOSS Community</li>
        <li>UCSC Mozilla Club</li>
        <li>IEEE Student Branch of IIT</li>
      </ul>
      <p>Scores will automatically updates when merging a Pull request.</p>

      <div className="flex gap-2 my-2 items-center w-fit text-red-700 border border-red-700 rounded-lg text-sm px-5 py-2.5 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 select-none">
        <GitBranch height={16} />
        <p>1 merged PR = 10 Points</p>
      </div>
    </main>
  );
};

export default ProjectsPage;
