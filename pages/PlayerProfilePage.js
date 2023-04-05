import React from "react";
import players from "../../src/players.json";
import PlayerProfile from "../PlayerProfile";

const PlayerProfilePage = ({ player }) => {
  if (!player) {
    return <div>Player not found.</div>;
  }

  return (
    <div>
      <h1>{player.name} Profile</h1>
      <PlayerProfile player={player} />
    </div>
  );
};

export default PlayerProfilePage;

export async function getStaticPaths() {
  const paths = players.map((player) => ({
    params: { id: player.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const player = players.find((player) => player.id === parseInt(params.id));
  return { props: { player: player || null } };
}
