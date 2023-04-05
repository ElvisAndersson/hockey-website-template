import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";



/*
  Task 2: on the home show only 3 players, add a link to see all players on the /players page
  Add more players to the json - Done
  Make a "players page" with all the players - players page already exist
*/
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.Js Testsida</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Hockey stuff. <a href="/pages/Player1.jsx">Next.js and React.</a>
        </h1>

        <p className={styles.description}>
          <code>This week in Sweden.</code>
          <code>The Hockey Project by Elvis Andersson.</code>
        </p>

        <div className={styles.grid}>
          {/* Task 1: refactor this to map over the players array and display the correct card - NOT Done */}
          {/* add any missing info to the players.json file - Done */}
          {/* need to be softcoded, not hardcoded like now, take from json */}
          <Link legacyBehavior href="/players/1">
            <a className={styles.card}>
              <h3>Player Placeholder 1 &rarr;</h3>
              <img
                src="https://a.espncdn.com/i/headshots/nhl/players/full/5033247.png"
                alt="Player 1"
                width="350"
                height="auto"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                blandit.
              </p>
            </a>
          </Link>
          <Link href="/players/2" className={styles.card}>
            <h3>Player Placeholder 2 &rarr;</h3>
            <img
              src="https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/5077308.png"
              alt="Player 1"
              width="350"
              height="auto"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              blandit.
            </p>
          </Link>

          <a href="/players/3" className={styles.card}>
            <h3>Player Placeholder 3 &rarr;</h3>
            <img
              src="https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/4588638.png&w=350&h=254"
              alt="Player 1"
              width="350"
              height="auto"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              blandit.
            </p>
          </a>
          <Link href="/playerindex" className={styles.card}>
            <h3>Click here for all the players &rarr;</h3>
            <img
              src="https://cms.nhl.bamgrid.com/images/photos/300558248/1024x576/cut.jpg"
              alt="Player 1"
              width="350"
              height="auto"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              blandit.
            </p>
            </Link>
        </div>
        
      </main>

      <footer></footer>

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
