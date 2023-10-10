import { Payment, columns } from "./components/columns";
import { DataTable } from "./components/data-table";

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
    <main className="container max-w-6xl">
      <div className="container mx-auto py-10 w-full">
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
};

export default HomePage;
