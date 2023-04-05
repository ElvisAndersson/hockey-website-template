import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import players from "../src/players.json";
import PlayerProfile from "../pages/PlayerProfile";

const getPlayer = (id) => {
  const player = players.find((player) => id === player.id);
  console.log(player); 
  return player;
};

const MultiplePlayers = ({ idArray }) => {
  if (!idArray) {
    return null;
  }

  return (
    <div className={styles.container}>
      {idArray.map((id) => {
        const player = getPlayer(id);
        return player ? (
          <div key={id} className={styles.card}>
            <img src={player.img} alt={`Player ${id}`} width="650" height="auto" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit.</p>
            <PlayerProfile player={player} />
          </div>
        ) : null;
      })}
    </div>
  );
};

export default MultiplePlayers;