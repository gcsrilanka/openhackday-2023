export async function GET() {
  const data = [
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

  return Response.json({ data });
}
