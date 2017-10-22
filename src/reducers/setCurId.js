export default (state = [], action) => {
  switch (action.type){
    case "SET_CUR_ID":
      return [action.payload];
    case "RESET_CUR_ID":
        return [];
    default:
      return state;
    }
}
