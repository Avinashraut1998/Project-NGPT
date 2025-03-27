import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  console.log(posterPath);

  return (
    <div>
      <div className="w-48 pr-4">
        <img src={IMG_CDN_URL + posterPath} alt="Movie Card" />
      </div>
    </div>
  );
};
export default MovieCard;
