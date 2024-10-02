import { combineReducers, createStore, applyMiddleware } from "redux";
import genreReducer from "./reducers/genreReducer";
import favoritesReducer from "./reducers/favouritesReducer";
import { thunk } from "redux-thunk";
const rootReducer = combineReducers({
  genres: genreReducer,
  favorites: favoritesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
