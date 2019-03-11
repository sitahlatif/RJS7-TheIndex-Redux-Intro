import authors from "../data";
const initialState = {
  authors: authors
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_AUTHOR":
      return {
        ...state,
        authors: state.authors.concat(action.payload)
      };
    case "DELETE_AUTHOR":
      console.log(action.payload);
      return {
        ...state,
        authors: state.authors.filter(author => action.payload !== author)
      };

    default:
      return state;
  }
};
export default reducer;
