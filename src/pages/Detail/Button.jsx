import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/actions";
import { CiBookmarkRemove } from "react-icons/ci"; // İkon kullanımı için import

const Button = ({ movie }) => {
  const { favorites } = useSelector((store) => store.favorites);
  const dispatch = useDispatch();

  // Ekrana basılan film favoriler arasında var mı
  const isFav = favorites.find((item) => item.id === movie.id);

  // Favorilerde zaten varsa 2. parametre false yoksa true olmalı:
  const handleClick = () => {
    dispatch(toggleFavorite(movie, isFav ? false : true));
  };

  return (
    <div className="flex justify-start mb-3">
      <button
        onClick={handleClick}
        className="flex items-center p-2 bg-transparent text-white border-2 border-white rounded-lg transition duration-300 hover:bg-white hover:text-gray-800 shadow-lg transform hover:scale-105"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
        {isFav ? <span>Remove from List</span> : <span>Add to List</span>}
      </button>
    </div>
  );
};

export default Button;
