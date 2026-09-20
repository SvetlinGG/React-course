import Calendar from "./components/Calendar"
import Counter from "./components/Counter"
import MovieList from "./components/MovieList"
import Timer from "./components/Timer"
import Typer from "./components/Typer"


function App() {
  

  return (

    <div className="components">
    <h1>React Timer</h1>

    <Timer />

    <Counter />

    <Calendar />

    <MovieList />

    <Typer />

    </div>
  )
}

export default App
