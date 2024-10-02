import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { baseImgUrl } from "../../utils/constants";
import { Link } from "react-router-dom";
import { AiOutlineMinus } from "react-icons/ai";
import { toggleFavorite } from "../../redux/actions/index";

const index = () => {
  const dispatch = useDispatch();
  const { isLoading, error, favorites } = useSelector((store) => store.favorites);

  const handleDelete = (movie) => {
    dispatch(toggleFavorite(movie, false));
  };

  if (isLoading) return <Loader />;
  if (error) return <Error info={error} />;

  return (
    <div>
      <h1 className="text-xl md:text-2xl font-semibold"> Watchlist</h1>
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 my-10 ">
        {favorites.map((movie) => (
          <div key={movie.id} className="relative z-0">
            <button
              onClick={() => handleDelete(movie)}
              className="absolute top-3 right-3 h-10 w-10 bg-red-600 rounded-full shadow-md transition-transform transform hover:bg-red-700 hover:scale-105 flex items-center justify-center border-2 border-white z-3"
            >
              <AiOutlineMinus className="text-white text-lg" />
            </button>

            <Link to={`/movie/${movie.id}`}>
              <img
                className="rounded"
                src={baseImgUrl + movie.poster_path}
                alt={movie.title}
              />
            </Link>
            <h1 className="text-xl text-center font-semibold mt-3">{movie.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
