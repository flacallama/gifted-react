export default (state = [], action) => {
  switch (action.type){
    case "SET_CUR_ID":
      return [action.payload];
    default:
      return state;
    }
}
