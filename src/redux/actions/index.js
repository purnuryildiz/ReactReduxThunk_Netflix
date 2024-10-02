import api from "../../utils/api";
import ActionTypes from "../actionTypes";

//categori verilerini alıp reducer'a bildiren thunk aksiyonu:
export const getGenres = () => (dispatch) => {
  //yüklenmenin başladığını reducer a bildirmek için:
  dispatch({ type: ActionTypes.GENRE_LOADING });

  //api'den kategorilerin istenmesi:
  api
    .get("/genre/movie/list")
    //başarılı olursa reducer'a veriyi haber ver:
    .then((res) =>
      dispatch({
        type: ActionTypes.GENRE_SUCCESS,
        payload: res.data.genres,
      })
    )
    //başarısız olursa reducer'a hatayı haber ver:
    .catch((err) =>
      dispatch({
        type: ActionTypes.GENRE_ERROR,
        payload: err.message,
      })
    );
};

//favorilerdeki filmleri al:
export const getFavorites = () => (dispatch) => {
  dispatch({ type: ActionTypes.FAV_LOADING });
  api
    .get("/account/21544039/favorite/movies")
    .then((res) =>
      dispatch({
        type: ActionTypes.FAV_SUCCESS,
        payload: res.data.results,
      })
    )
    .catch((err) => {
      dispatch({
        type: ActionTypes.FAV_ERROR,
        payload: err.message,
      });
    });
};

//favorilere ekle-çıkar:
export const toggleFavorite = (movie, isAdd) => (dispatch) => {
  api
    .post("/account/21544039/favorite", {
      media_type: "movie",
      media_id: movie.id,
      favorite: isAdd,
    })
    .then((res) =>
      isAdd
        ? dispatch({
            type: ActionTypes.ADD_TO_FAV,
            payload: movie,
          })
        : dispatch({ type: ActionTypes.REMOVE_FAV, payload: movie })
    )
    .catch((err) => console.log(err));
};
