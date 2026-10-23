import { Link } from 'react-router'
import GameCard from './GameCard';
import { useState } from 'react';

export default function Catalog() {

  const [games, setGames] = useState([]);

  


    return (
        <section id="catalog-page">
  <h1>Catalog</h1>
  {/* Display div: with information about every game (if any) */}
  <div className="catalog-container">
    <GameCard />
  </div>
  {/* Display paragraph: If there is no games  */}
  {/* <h3 class="no-articles">No Added Games Yet</h3> */}
</section>

    );
}