import { combineReducers, createStore, applyMiddleware } from "redux";
import genreReducer from "./reducers/genreReducer";
import { thunk } from "redux-thunk";
const rootReducer = combineReducers({
  genres: genreReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
