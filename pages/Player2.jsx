import React from "react";
import PlayerProfile from "./PlayerProfile";

const players = [
  {
    name: "Adam Jones",
    age: 21,
    tags: ["Newbie"],
    goals: 12,
    matchesPlayed: 4
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