import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchData } from "../hooks/fetchingdata";
import FotballPitch from "./FotballPitch";

const url = "https://v3.football.api-sports.io/players?league=39&season=2023";

const fetchPlayers = async () => {
  let allPlayers = [];
  let currentPage = 1;
  let totalPages = 1;

  while (currentPage <= totalPages) {
    const pagedUrl = `${url}&page=${currentPage}`;
    const data = await fetchData(pagedUrl);
    if (data?.response) {
      allPlayers = allPlayers.concat(data.response);
      totalPages = data.paging.total;
      currentPage++;
    } else {
      break;
    }
  }

  return allPlayers.slice(0, 50);
};

export const Fantasy = () => {
  const {
    data: players,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["players", 39, 2023],
    queryFn: fetchPlayers,
    staleTime: 1000 * 60 * 10,
  });

  const [selectedPlayers, setSelectedPlayers] = useState<(any | null)[]>(
    Array(11).fill(null)
  );

  const addPlayer = (player: any, index: number) => {
    setSelectedPlayers((prev) => {
      if (
        prev.some((p, i) => p?.player.id === player.player.id && i !== index)
      ) {
        return prev;
      }
      const newSelected = [...prev];
      newSelected[index] = player;
      return newSelected;
    });
  };

  const removePlayer = (id: number) => {
    setSelectedPlayers((prev) =>
      prev.map((p) => (p?.player.id === id ? null : p))
    );
  };

  if (error) return <div>Error loading players</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center ">
        Fantasy Team Builder
      </h2>
      <FotballPitch
        selectedPlayers={selectedPlayers}
        players={players ?? []}
        addPlayer={addPlayer}
        removePlayer={removePlayer}
      />
      {isLoading && (
        <p className="text-center mt-4 text-gray-500">Loading players...</p>
      )}
    </div>
  );
};
export default Fantasy;
