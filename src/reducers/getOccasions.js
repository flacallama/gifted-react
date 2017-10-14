export default (state = [], action) => {
  switch (action.type){
    case "GET_OCCASIONS_PENDING":
      return state;
    case "GET_OCCASIONS_FULFILLED":
      return [...action.payload.data.rows];
    case "ADD_OCCASION_PENDING":
      return state;
    case "ADD_OCCASION_FULFILLED":
      return [...action.payload.data]
    case "DELETE_OCCASION_PENDING":
      return state;
    case "DELETE_OCCASION_FULFILLED":
      return [...action.payload.data]
    default:
      return state;
  }
}
