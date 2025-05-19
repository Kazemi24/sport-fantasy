import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../hooks/fetchingdata";

const url = "https://v3.football.api-sports.io/standings?league=39&season=2023";

const fetchStandings = async () => {
  const data = await fetchData(url);
  if (data?.response?.[0]?.league?.standings?.[0]) {
    return data.response[0].league.standings[0];
  }
  throw new Error("No standings data");
};

export const LeagueTable = () => {
  const {
    data: standings,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["standings", 39, 2023],
    queryFn: fetchStandings,
    staleTime: 1000 * 60 * 10,
  });

  if (isLoading) return <div>Loading standings...</div>;
  if (error) return <div>Error loading standings</div>;

  return (
    <div className="mt-4 p-4">
      <h3 className="text-xl font-bold mb-2">
        Premier League Standing 2023 - 2024
      </h3>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border-b">#</th>
            <th className="p-2 border-b">Team</th>
            <th className="p-2 border-b">Games</th>
            <th className="p-2 border-b">W</th>
            <th className="p-2 border-b">D</th>
            <th className="p-2 border-b">L</th>
            <th className="p-2 border-b">GD</th>
            <th className="p-2 border-b">P</th>
          </tr>
        </thead>
        <tbody>
          {standings && standings.length > 0 ? (
            standings.map(
              (team: {
                team: { id: number; name: string; logo: string };
                rank: number;
                all: {
                  played: number;
                  win: number;
                  draw: number;
                  lose: number;
                };
                goalsDiff: number;
                points: number;
              }) => (
                <tr key={team.team.id} className="hover:bg-gray-50">
                  <td className="p-2 border-b text-center">{team.rank}</td>
                  <td className="p-2 border-b flex items-center space-x-2">
                    <img
                      src={team.team.logo}
                      alt={team.team.name}
                      className="h-6 w-6 rounded"
                    />
                    <span>{team.team.name}</span>
                  </td>
                  <td className="p-2 border-b text-center">
                    {team.all.played}
                  </td>
                  <td className="p-2 border-b text-center">{team.all.win}</td>
                  <td className="p-2 border-b text-center">{team.all.draw}</td>
                  <td className="p-2 border-b text-center">{team.all.lose}</td>
                  <td className="p-2 border-b text-center">{team.goalsDiff}</td>
                  <td className="p-2 border-b text-center">{team.points}</td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan={8} className="p-4 text-center text-gray-500">
                No standings available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LeagueTable;
