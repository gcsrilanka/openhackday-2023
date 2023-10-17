import client from "@/lib/client";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

const Leaderboard = async () => {
  const response = await client.get("/contributors/hacktoberfestleaderboard");
  const data = response.data?.map(({ url, login, points }, index) => {
    return {
      id: index,
      rank: index + 1,
      contributor: login,
      points: points,
    };
  });

  return (
    <div className="py-10 w-full">
      <h3 className="text-4xl font-bold mb-4">Leaderboard</h3>
      <DataTable columns={columns} data={data} searchKey={"contributor"} className="w-full" />
    </div>
  );
};

export default Leaderboard;
