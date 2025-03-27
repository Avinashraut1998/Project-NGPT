import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  //fetch movie trailer && updatong the store with trailer video data

  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterTrailer = json.results.filter(
      (video) => video.type == "Trailer"
    );
    const finalTrailer = filterTrailer.length
      ? filterTrailer[2] // main trailer is at [1]
      : json.results[0];

    dispatch(addTrailerVideo(finalTrailer));
    // setTrailerId(finalTrailer.key);
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
