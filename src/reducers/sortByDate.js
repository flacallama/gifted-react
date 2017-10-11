export default(state = 'date', action) => {
  switch (action.type){
    case "SORT_GIFTEES_BY":
      console.log("reducer in sort hit")
      return action.payload;
    default:
      return state;
  }
}
