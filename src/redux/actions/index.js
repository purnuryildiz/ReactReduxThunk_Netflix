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
