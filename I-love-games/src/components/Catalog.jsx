import { Link } from 'react-router'
import GameCard from './GameCard';
import { useEffect, useState } from 'react';

export default function Catalog() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/games")
      .then(data => {
        console.log('type: ',
          typeof data,
          'value: ', data
        );
        setGames(data)
      })
      .catch(err => console.log(err))
  },[])




    return (
        <section id="catalog-page">
  <h1>Catalog</h1>
  {/* Display div: with information about every game (if any) */}
  <div className="catalog-container">
    {games.length > 0
    ? games.map(game => <GameCard key={game.id} {...game} />)
    : <h3 className="no-articles">No Added Games Yet</h3>
    }
  </div>
  {/* Display paragraph: If there is no games  */}
  
</section>

    );
}