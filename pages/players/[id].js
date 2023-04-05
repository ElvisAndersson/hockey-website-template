import players from '../../src/players.json';
import PlayerProfile from '../../src/components/PlayerProfile';

export default function PlayerProfilePage({ player }) {
  return (
    <div>
      <h1>{player.name} Profile</h1>
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
  const player = players.find((p) => p.id === params.id);
  
  if (!player) {
    return { notFound: true };
  }

  return { props: { player } };
}
