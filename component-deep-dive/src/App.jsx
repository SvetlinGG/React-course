import Calendar from "./components/Calendar"
import Counter from "./components/Counter"
import MovieList from "./components/MovieList"
import TyperSection from "./components/Typer-section"
import Timer from "./components/Timer"


function App() {
  

  return (

    <div className="components">
    <h1>React Timer</h1>

    <Timer />

    <Counter />

    <Calendar />

    <MovieList />

    <TyperSection />


    </div>
  )
}

export default App
