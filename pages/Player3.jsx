import React from "react";
import PlayerProfile from "./PlayerProfile";

const players = [
  {
    name: "Martin Herald",
    age: 23,
    tags: ["Top Scorer"],
    goals: 120,
    matchesPlayed: 15
  },
];

export default function PlayerList() {
  return (
    <div className="players">
      {players.map((player) => (
        <PlayerProfile key={player.name} player={player} />
      ))}
    </div>
  );
}