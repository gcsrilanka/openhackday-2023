"use client";

import { GitBranch } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const targetDate = new Date("November 1, 2023").getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3 className="text-4xl font-bold mb-2">Countdown</h3>
      <p className="text-xl">
        {countdown.days} days, {countdown.hours} hours, {countdown.minutes} minutes, {countdown.seconds} seconds
      </p>
    </div>
  );
};

const Hero = () => {
  return (
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
  );
};

export default Hero;
