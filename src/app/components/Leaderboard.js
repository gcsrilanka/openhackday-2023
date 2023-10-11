"use client";

import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

const Leaderboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://api.github.com/repos/axios/axios/contributors");

        const contributors = response.data.map((contributor, index) => {
          return {
            id: contributor.id,
            rank: index + 1,
            contributor: contributor.login,
            points: contributor.contributions,
          };
        });

        setData(contributors);
      } catch (error) {
        setData([]);
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <div className="py-10 w-full">
      <h3 className="text-4xl font-bold mb-4">Leaderboard</h3>
      <DataTable columns={columns} data={data} searchKey={"contributor"} className="w-full" />
    </div>
  );
};

export default Leaderboard;
