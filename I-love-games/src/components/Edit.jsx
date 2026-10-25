import { useEffect, useState } from "react";
import { useParams } from "react-router";
import request from "../utils/response";

const initialValues = {
  title: '',
  genre: '',
  activePlayers: '',
  releaseDate: '',
  imageUrl: '',
  summary: ''
}

export default function Edit() {

  const {gameId}  = useParams()
  const [game, setGame] = useState(initialValues);

  useEffect(() => {
    request(`/games?id=eq.${gameId}`)
    .then(data => setGame(data[0]))
    .catch(err => console.log(err))
  }, [gameId]);



  const changeHandler = (e) => {
    setGame({
        ...game,
        [e.target.name]: e.target.value
    })
  }

  const editAction = async () => {

    const result = await request(`/games?id=eq.${gameId}`, 'PUT', game)
      .then(() => {
        alert('Edited!')
      })

      console.log(result);
      

  }


    return (
        <section id="edit-page">
  <form id="add-new-game" action={editAction}>
    <div className="container">
      <h1>Edit Game</h1>
      <div className="form-group-half">
        <label htmlFor="gameName">Game Name:</label>
        <input
          type="text"
          id="gameName"
          name="gameName"
          value={game.title}
          onChange={changeHandler}
          placeholder="Enter game title..."
        />
      </div>
      <div className="form-group-half">
        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={game.genre}
          onChange={changeHandler}
          placeholder="Enter game genre..."
        />
      </div>
      <div className="form-group-half">
        <label htmlFor="activePlayers">Active Players:</label>
        <input
          type="number"
          id="activePlayers"
          name="activePlayers"
          value={game.activePlayers}
          onChange={changeHandler}
          min={0}
          placeholder={0}
        />
      </div>
      <div className="form-group-half">
        <label htmlFor="releaseDate">Release Date:</label>
        <input type="date" id="releaseDate" name="releaseDate" value={game.releaseDate} onChange={changeHandler} />
      </div>
      <div className="form-group-full">
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={game.imageUrl}
          onChange={changeHandler}
          placeholder="Enter image URL..."
        />
      </div>
      <div className="form-group-full">
        <label htmlFor="summary">Summary:</label>
        <textarea
          name="summary"
          id="summary"
          value={game.summary}
          onChange={changeHandler}
          rows={5}
          placeholder="Write a brief summary..."
          defaultValue={""}
        />
      </div>
      <input className="btn submit" type="submit" defaultValue="EDIT GAME" onClick={changeHandler} />
    </div>
  </form>
</section>

    );
}