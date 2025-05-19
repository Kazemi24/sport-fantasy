import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../hooks/fetchingdata";

const url = "https://v3.football.api-sports.io/fixtures?league=39&season=2023";

const fetchFixtures = async () => {
  const data = await fetchData(url);
  if (data?.response) {
    return data.response.slice(0, 8);
  }
  throw new Error("No fixtures data");
};

export const FixturesTable = () => {
  const {
    data: fixtures,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["fixtures", 39, 2023],
    queryFn: fetchFixtures,
    staleTime: 1000 * 60 * 10,
  });

  if (isLoading) return <div>Loading fixtures...</div>;
  if (error) return <div>Error loading fixtures</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Fixtures</h2>
      <table className="w-full text-left border border-gray-300">
        <thead>
          <tr>
            <th className="p-2 border-b">Home Team</th>
            <th className="p-2 border-b">Away Team</th>
            <th className="p-2 border-b">Home Goals</th>
            <th className="p-2 border-b">Away Goals</th>
          </tr>
        </thead>
        <tbody>
          {fixtures && fixtures.length > 0 ? (
            fixtures.map(
              (
                fixture: {
                  teams: {
                    home: { logo: string; name: string };
                    away: { logo: string; name: string };
                  };
                  goals: { home: number | null; away: number | null };
                },
                index: number
              ) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="p-2 border-b ">
                    <img
                      src={fixture.teams.home.logo}
                      alt={fixture.teams.home.name}
                      className="h-6 w-6 rounded"
                    />
                    {fixture.teams.home.name}
                  </td>
                  <td className="p-2 border-b">
                    <img
                      src={fixture.teams.away.logo}
                      alt={fixture.teams.away.name}
                      className="h-6 w-6 rounded"
                    />
                    {fixture.teams.away.name}
                  </td>
                  <td className="p-2 border-b text-center">
                    {fixture.goals.home ?? "-"}
                  </td>
                  <td className="p-2 border-b text-center">
                    {fixture.goals.away ?? "-"}
                  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan={4} className="p-2 text-center text-gray-500">
                No fixtures available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FixturesTable;
