export default (state = [], action) => {
  switch (action.type){
    case "GET_GIFTEES_PENDING":
      return state;
    case "GET_GIFTEES_FULFILLED":
      return [...action.payload.data.rows];
    default:
      return state;
  }
}
