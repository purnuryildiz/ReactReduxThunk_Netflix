const initialState = {
  genres: [],
  isLoading: true,
  error: null,
};
const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "x":
      return state;
    case "y":
      return state;
    case "z":
      return state;
    default:
      return state;
  }
};

export default exampleReducer;
