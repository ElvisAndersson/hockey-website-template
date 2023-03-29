import React from "react";
import PlayerProfile from "./PlayerProfile";
import styles from '../styles/Home.module.css';

const players = [
  {
    name: "John Doe",
    age: 30,
    tags: ["Platinum", "Admin", "Veteran"],
    goals: 100,
    matchesPlayed: 31,
  },
];

export default function PlayerList() {
  return (
    <div className={styles.container}>
    <div className={styles.card}>
    <img src="https://render.fineartamerica.com/images/rendered/default/print/8/6/break/images-medium-5/2014-bridgestone-nhl-winter-classic-gregory-shamus.jpg" alt="Player 1" width="650" height="auto"   />
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit.</p>
      {players.map((player) => (
        <PlayerProfile key={player.name} player={player} />
      ))}
    </div></div>
  );
}

