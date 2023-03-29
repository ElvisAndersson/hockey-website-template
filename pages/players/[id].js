import { useRouter } from "next/router";

import styles from "../../styles/Home.module.css";
import players from "../../src/players.json";
import PlayerProfile from "../PlayerProfile";

const getPlayer = (id) => players.find((player) => id === player.id);

/* Task 4: add a go back button */
const Player = () => {
  const router = useRouter();
  const { id } = router.query;
  const player = getPlayer(id);

  return player ? (
    // Task 5: move this code inside the player profile
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={player.img} alt="Player 1" width="650" height="auto" />
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          blandit.
        </p>
        <PlayerProfile player={player} />
      </div>
    </div>
  ) : null;
};

export default Player;
