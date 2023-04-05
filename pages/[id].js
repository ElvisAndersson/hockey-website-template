import players from '../src/players.json';


export default function Player({ player }) {
  return (
    <div>
      <h1>Player Profile</h1>
      <PlayerProfile player={player} />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = players.map((player) => ({
    params: { id: player.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const id = parseInt(params.id);
  const player = players.find((player) => player.id === id);

  return {
    props: {
      player,
    },
  };
}
