export default (state = [], actions) => {
  switch (actions.type){
    case "GET_GIFTS_PENDING":
      return state;
    case "GET_GIFTS_FULFILLED":
    console.log('reducer getGifts', actions.payload.data.rows);
      return [...actions.payload.data.rows];
    default:
      return state;
  }
}
