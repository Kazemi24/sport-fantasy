// components/FixturesTable.tsx
import { fetchData } from "../hooks/fetchingdata";
import { useState, useEffect } from "react";

const url = "https://v3.football.api-sports.io/fixtures?league=39&season=2023";

export const FixturesTable = () => {
  interface Fixture {
    teams: {
      home: { name: string; logo: string };
      away: { name: string; logo: string };
    };
    goals: {
      home: number | null;
      away: number | null;
    };
  }
  const [errorMessage, setErrorMessage] = useState("");
  const [fixtures, setFixtures] = useState<Fixture[]>([]);

  useEffect(() => {
    const fetchFixtures = async () => {
      const data = await fetchData(url);

      if (data && data.response) {
        setFixtures(data.response.slice(0, 8));
        console.log("Fetched Fixtures:", data.response);
      } else {
        setErrorMessage("No data recived");
      }
    };

    fetchFixtures();
  }, []);

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
          {fixtures.length > 0 ? (
            fixtures.map((fixture, index) => (
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

                <td className="p-2 border-b">{fixture.goals.home ?? "-"}</td>
                <td className="p-2 border-b">{fixture.goals.away ?? "-"}</td>
              </tr>
            ))
          ) : (
            <tr>
              {errorMessage && (
                <div className="form__error-message mt-3 text-red-600">
                  Error: {errorMessage}
                </div>
              )}
              <td colSpan={4} className="p-2 text-center">
                Loading or no data available...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FixturesTable;
