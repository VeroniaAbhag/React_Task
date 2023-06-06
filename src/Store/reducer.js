const INITIAL_STATE = {
  lang: "en",
  counter: 0,
  favorite:[],
  movies:[],
};
 function Reducer(state =INITIAL_STATE , action) {
  switch (action.type) {
    case "SET_LANGUAGE":
      return { ...state, lang: action.payload };
    case "SET_COUNT":
      return { ...state, counter: action.payload };
    case "SET_FAVORITE":
      return { ...state, favorite: action.payload };
    case "SET_API":
      return { ...state, movies: action.payload };
    default:
      return state;
  }
}

export default Reducer;
