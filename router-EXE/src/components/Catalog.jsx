import { useEffect, useState } from 'react';
import request from '../utils/request';
import GameCard from './GameCard';

export default function Catalog() {

  const [games, setGames] = useState([])

  useEffect(() => {
    request("/games")
      .then(data => { console.log('type: ', typeof data, 'value: ', data); setGames(data); })
      .catch(err => console.log(err))
  },[])


    return (
        <section id="catalog-page">
          <h1>Catalog</h1>
  
          <div className="catalog-container">
    
            {games.length > 0 
            ? games.map(game => <GameCard key={game.id} {...game} />)
            :  <h3 className="no-articles">No Added Games Yet</h3>
            }
          </div>
        </section>

    );
}