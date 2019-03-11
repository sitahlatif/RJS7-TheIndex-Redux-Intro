const ADD_AUTHOR = "ADD_AUTHOR";
const DELETE_AUTHOR = "DELETE_AUTHOR";

export const addAuthor = author => {
  return {
    type: ADD_AUTHOR,
    payload: author
  };
};

export const deleteAuthor = author => {
  return {
    type: DELETE_AUTHOR,
    payload: author
  };
};
