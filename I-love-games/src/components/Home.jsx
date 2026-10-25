import { useEffect, useState } from "react";
import request from "../utils/response";
import GameCard from "./GameCard";

export default function Home() {

  //const {gameId} = useParams();
  const [gameRender, setGameRender] = useState([]);

  useEffect(() => {
    request('/games?order=createdAd.desc&limit=3')
      .then(data => setGameRender(data))
      .catch(err => console.log(err))
  },[])


    return (
        <section id="welcome-world">
  <div className="welcome-message">
    <h2>ALL new games are</h2>
    <h3>Only in </h3>
    <img id="logo-left" src="./images/logo.png" alt="logo" />
  </div>
  <div id="home-page">
    <h1>Latest Games</h1>
    <div id="latest-wrap">
      {/* Display div: with information about every game (if any) */}
      <div className="home-container">
        {gameRender.length > 0
        ? gameRender.map(game => <GameCard key={game.id} {...game} />)
        : <p className="no-articles">No Games Yet</p> 
        }
      </div>
    </div>
  </div>
</section>

    );
}