import "./App.css";
import MovieCard from "./components/movie-card";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        {/* Render Movie Lists Here */}
        <MovieCard />
      </section>
    </div>
  );
}

export default App;
