import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import playersData from "../src/players.json";

export default function PlayerIndex() {
  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>These are all the players.</h1>

        <div className={styles.grid}>
          {/* map over the playersData array and display a card for each player */}
          {playersData.map((player) => (
            <Link legacyBehavior href={`/players/${player.id}`} key={player.id}>
              <a className={styles.card}>
                <h3>{player.name}</h3>
                <img src={player.img} alt={player.name} width="350" height="auto" />
                <p>{player.description}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>

    <footer>
      <Link legacyBehavior href="/">
        <a>← Back to Home</a>
      </Link>
    </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
        img {
          border-radius: 5px;
        }
        img:hover {
          filter: blur(2px);
      }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
