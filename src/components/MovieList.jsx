import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  return (
    <div className="px-2">
      <h1 className="text-3xl py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex ">
          {/* <MovieCard posterPath={movies[1].poster_path} /> */}
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
