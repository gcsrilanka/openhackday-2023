import Image from "next/image";
import { GitBranch } from "lucide-react";

import { Payment, columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import Countdown from "./components/Countdown";

const HomePage = async () => {
  async function getData() {
    // Fetch data from your API here.
    return [
      {
        id: "728ed52f",
        rank: 1,
        contributor: "John Doe",
        points: 100,
      },
      {
        id: "728ed52g",
        rank: 2,
        contributor: "Jane Doe",
        points: 50,
      },
      {
        id: "728ed52h",
        rank: 3,
        contributor: "John Smith",
        points: 25,
      },
    ];
  }

  const data = await getData();

  return (
    <main className="container max-w-7xl my-8">
      <section className="flex gap-8">
        <div className="w-full flex-1">
          <Image src="/hf10_banner_1032x600.png" width={1032} height={600} />

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

          <ul className="list-disc list-inside my-4">
            <li>GitHub Community Sri Lanka</li>
            <li>SLIIT FOSS Community</li>
            <li>NSBM FOSS Community</li>
            <li>J'pura FOSS Community</li>
            <li>UCSC Mozilla Club</li>
            <li>IEEE Student Branch of IIT</li>
          </ul>
          <p>Scores will automatically updates when merging a Pull request.</p>

          <div className="flex gap-2 my-2 items-center w-fit text-red-700 border border-red-700 rounded-lg text-sm px-5 py-2.5 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
            <GitBranch height={16} />
            <p>1 merged PR = 10 Points</p>
          </div>
        </div>
      </section>

      <div className="py-10 w-full">
        <h3 className="text-4xl font-bold mb-4">Leaderboard</h3>
        <DataTable columns={columns} data={data} className="w-full" />
      </div>

      <section className="py-10 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Make Your Contribution</h2>
        <p>
          Small experiments, inspired inventions, and the software everyone depends on—the code you write on GitHub can
          reach one codebase or millions.
        </p>
      </section>
    </main>
  );
};

export default HomePage;
