import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className=" bg-black">
      <div className="-mt-35 pl-10 relative z-20">
        {movies && movies.nowPlayingMovies ? (
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} /> // This one is new logic
        ) : (
          <p>Loading movies...</p>
        )}
        {movies && movies.TopratedMovies ? (
          <MovieList title={"Top Rated"} movies={movies.TopratedMovies} /> // This one is new logic
        ) : (
          <p>Loading movies...</p>
        )}
        {movies && movies.PopularMovies ? (
          <MovieList title={"Popular"} movies={movies.PopularMovies} /> // This one is new logic
        ) : (
          <p>Loading movies...</p>
        )}
        {movies && movies.UpcomingMovies ? (
          <MovieList title={"Upcoming Movies"} movies={movies.UpcomingMovies} /> // This one is new logic
        ) : (
          <p>Loading movies...</p>
        )}
      </div>
      {/* <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} /> //This is Original logic but it is not working so we use new */}
      {/*
       MovieList - Popular
          - Movie Card * n
       MovieList - Now Playing
       MovieList - Trending
       MovieList - Kids
      */}
    </div>
  );
};
export default SecondaryContainer;
