import movies from "../data/movies";

function MovieCard() {
    return (
        <div>        
        {
        movies.map((movie) => {
            return <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden p-4 flex gap-4" key={movie.title}>
            {/* รูปภาพ */}
            <img
              src={movie.image}
              alt={movie.title}
              className="w-24 h-32 object-cover rounded-lg"
            />
      
            {/* ข้อมูลหนัง */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold">Title: {movie.title}</h2>
                <p className="text-sm text-gray-600">Year: {movie.year}</p>
                <p className="text-sm text-gray-600">Runtime: {movie.runtime}</p>
                <div className="mt-2">
                  <span className="text-sm font-medium mr-2">Genres:</span>
                  {
                    movie.genres.map((genre, index) => {
                        return (
                        <span className="bg-red-200 text-red-800 text-xs px-2 py-1 rounded-full" key={index}>{genre}</span>
                        )    
                      })
                  }
                </div>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-600">IMDB Ratings: {movie.imdbRating}</p>
                <p className="text-sm text-gray-600">IMDB Votes: {movie.imdbVotes}</p>
              </div>
            </div>
          </div>
        })
        }
        </div>
    )
}

export default MovieCard