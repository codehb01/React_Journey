import { useEffect, useState } from "react";

function App() {
  const [players, setPlayers] = useState(() => {
    const storedPlayers = localStorage.getItem("players");
    return storedPlayers
      ? JSON.parse(storedPlayers)
      : [
          { name: "player1", score: 0 },
          { name: "Player2", score: 0 },
        ];
  });

  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);


  const updateName = (index, newName) => {
    const updated = [...players];
    updated[index].name = newName;
    setPlayers(updated);
  };

  const updateScore = (index, delta) => {
    const updated = [...players];
    updated[index].score += delta;
    setPlayers(updated);
  };

  const resetScores = () => {
    const reset = players.map((player) => ({ ...player, score: 0 }));
    setPlayers(reset);
  };
  return (
    <div className="bg-gray-800 w-full h-screen flex justify-center items-center">
      <div className="bg-gray-300 p-10 rounded-xl ">
        <h1 className="text-3xl font-bold text-center mb-6">Score Tracker</h1>
        <div className="flex gap-10">
          {players.map((player, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg w-64 shadow-md text-center"
            >
              <input
                type="text"
                value={player.name}
                onChange={(e) => updateName(index, e.target.value)}
                className="text-xl font-semibold text-center w-full mb-3 p-2 border border-gray-300 rounded"
              />
              <p className="bg-yellow-200 p-4 rounded-2xl w-full text-center">
                Score: {player.score}
              </p>
              <div>
                <button
                  onClick={() => updateScore(index, 1)}
                  className="p-4 rounded-full bg-green-500 shadow-2xl text-white font-bold text-2xl mt-3 mr-10 hover:cursor-pointer"
                >
                  +
                </button>
                <button
                  onClick={() => updateScore(index, -1)}
                  className="p-4 rounded-full bg-red-500 shadow-2xl text-white font-bold text-2xl mt-3 hover:cursor-pointer"
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={resetScores}
          className="p-4 rounded-sm bg-blue-500 shadow-2xl text-white font-bold text-2xl mt-5 w-full items-center hover:bg-red-500 cursor-pointer  "
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
