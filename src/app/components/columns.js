"use client";

import { ColumnDef } from "@tanstack/react-table";

export const columns = [
  {
    accessorKey: "rank",
    header: "Rank",
  },
  {
    accessorKey: "contributor",
    header: "Contributor",
  },
  {
    accessorKey: "points",
    header: "Points",
  },
];
