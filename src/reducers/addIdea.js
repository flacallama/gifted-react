export default (state = [], action) => {
  switch (action.type){
    case "ADD_IDEA":
      return [...state, ...action.payload];
    default:
      return state;
  }
}
