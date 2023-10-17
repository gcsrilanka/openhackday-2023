"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

const Countdown = ({ className }) => {
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
    <div className={cn("flex items-center gap-16 w-fit mx-auto text-center", className)}>
      {/* <h3 className="text-4xl font-bold mb-2">Countdown</h3> */}
      <div className="">
        <h1 className="text-9xl font-bold mb-4">{countdown.days < 10 ? `0${countdown.days}` : countdown.days}</h1>
        <p className="text-lg font-medium">Days</p>
      </div>

      <div className="">
        <h1 className="text-9xl font-bold mb-4">{countdown.hours < 10 ? `0${countdown.hours}` : countdown.hours}</h1>
        <p className="text-lg font-medium">Hours</p>
      </div>

      <div className="">
        <h1 className="text-9xl font-bold mb-4">
          {countdown.minutes < 10 ? `0${countdown.minutes}` : countdown.minutes}
        </h1>
        <p className="text-lg font-medium">Minutes</p>
      </div>

      <div className="">
        <h1 className="text-9xl font-bold mb-4">
          {countdown.seconds < 10 ? `0${countdown.seconds}` : countdown.seconds}
        </h1>
        <p className="text-lg font-medium">Seconds</p>
      </div>
    </div>
  );
};

export default Countdown;
