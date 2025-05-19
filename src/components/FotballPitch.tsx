import { useState } from "react";

interface FotballPitchProps {
  selectedPlayers: any[];
  players: any[];
  addPlayer: (player: any, index: number) => void;
  removePlayer: (id: number) => void;
}

const positions = [
  "Goalkeeper",
  "Defender",
  "Defender",
  "Defender",
  "Defender",
  "Midfielder",
  "Midfielder",
  "Midfielder",
  "Midfielder",
  "Forward",
  "Forward",
];

function FotballPitch({
  selectedPlayers,
  players,
  addPlayer,
  removePlayer,
}: FotballPitchProps) {
  const [dropdownVisible, setDropdownVisible] = useState<number | null>(null);

  const handleAddClick = (index: number) => {
    setDropdownVisible((prev) => (prev === index ? null : index));
  };

  return (
    <div className="relative w-full h-[580px] bg-green-700 rounded-lg p-6 text-white font-semibold shadow-lg max-w-lg mx-auto">
      {/* Goalkeeper row */}
      <div className="flex justify-center mb-8 relative">
        {positions.slice(0, 1).map((position, i) => {
          const index = i;
          const player = selectedPlayers[index];
          return (
            <div
              key={index}
              className="relative w-24 h-28 bg-green-900 rounded-lg flex flex-col items-center justify-center"
            >
              <p className="mb-1">{position}</p>
              {player ? (
                <>
                  <p className="truncate px-1">{player.player.name}</p>
                  <button
                    className="text-red-400 mt-1"
                    onClick={() => removePlayer(player.player.id)}
                  >
                    Remove
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="bg-blue-600 px-3 py-1 rounded"
                    onClick={() => handleAddClick(index)}
                  >
                    Add
                  </button>
                  {dropdownVisible === index && (
                    <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 w-48 max-h-48 overflow-y-auto bg-white text-black rounded shadow-lg z-10">
                      {players.map((player: any) => (
                        <div
                          key={player.player.id}
                          className="cursor-pointer hover:bg-gray-200 px-2 py-1"
                          onClick={() => {
                            addPlayer(player, index);
                            setDropdownVisible(null);
                          }}
                        >
                          {player.player.name}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Defenders row */}
      <div className="flex justify-between mb-8 relative px-4">
        {positions.slice(1, 5).map((position, i) => {
          const index = i + 1;
          const player = selectedPlayers[index];
          return (
            <div
              key={index}
              className="relative w-20 h-28 bg-green-900 rounded-lg flex flex-col items-center justify-center"
            >
              <p className="mb-1 text-sm">{position}</p>
              {player ? (
                <>
                  <p className="truncate px-1 text-xs">{player.player.name}</p>
                  <button
                    className="text-red-400 mt-1 text-sm"
                    onClick={() => removePlayer(player.player.id)}
                  >
                    Remove
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="bg-blue-600 px-2 py-1 rounded text-sm"
                    onClick={() => handleAddClick(index)}
                  >
                    Add
                  </button>
                  {dropdownVisible === index && (
                    <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 w-44 max-h-48 overflow-y-auto bg-white text-black rounded shadow-lg z-10">
                      {players.map((player: any) => (
                        <div
                          key={player.player.id}
                          className="cursor-pointer hover:bg-gray-200 px-2 py-1 text-sm"
                          onClick={() => {
                            addPlayer(player, index);
                            setDropdownVisible(null);
                          }}
                        >
                          {player.player.name}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Midfielders row */}
      <div className="flex justify-between mb-8 relative px-6">
        {positions.slice(5, 9).map((position, i) => {
          const index = i + 5;
          const player = selectedPlayers[index];
          return (
            <div
              key={index}
              className="relative w-20 h-28 bg-green-900 rounded-lg flex flex-col items-center justify-center"
            >
              <p className="mb-1 text-sm">{position}</p>
              {player ? (
                <>
                  <p className="truncate px-1 text-xs">{player.player.name}</p>
                  <button
                    className="text-red-400 mt-1 text-sm"
                    onClick={() => removePlayer(player.player.id)}
                  >
                    Remove
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="bg-blue-600 px-2 py-1 rounded text-sm"
                    onClick={() => handleAddClick(index)}
                  >
                    Add
                  </button>
                  {dropdownVisible === index && (
                    <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 w-44 max-h-48 overflow-y-auto bg-white text-black rounded shadow-lg z-10">
                      {players.map((player: any) => (
                        <div
                          key={player.player.id}
                          className="cursor-pointer hover:bg-gray-200 px-2 py-1 text-sm"
                          onClick={() => {
                            addPlayer(player, index);
                            setDropdownVisible(null);
                          }}
                        >
                          {player.player.name}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Forwards row */}
      <div className="flex justify-center space-x-6 relative px-20">
        {positions.slice(9).map((position, i) => {
          const index = i + 9;
          const player = selectedPlayers[index];
          return (
            <div
              key={index}
              className="relative w-20 h-28 bg-green-900 rounded-lg flex flex-col items-center justify-center"
            >
              <p className="mb-1 text-sm">{position}</p>
              {player ? (
                <>
                  <p className="truncate px-1 text-xs">{player.player.name}</p>
                  <button
                    className="text-red-400 mt-1 text-sm"
                    onClick={() => removePlayer(player.player.id)}
                  >
                    Remove
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="bg-blue-600 px-2 py-1 rounded text-sm"
                    onClick={() => handleAddClick(index)}
                  >
                    Add
                  </button>
                  {dropdownVisible === index && (
                    <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 w-44 max-h-48 overflow-y-auto bg-white text-black rounded shadow-lg z-10">
                      {players.map((player: any) => (
                        <div
                          key={player.player.id}
                          className="cursor-pointer hover:bg-gray-200 px-2 py-1 text-sm"
                          onClick={() => {
                            addPlayer(player, index);
                            setDropdownVisible(null);
                          }}
                        >
                          {player.player.name}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FotballPitch;
