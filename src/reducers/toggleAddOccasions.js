export default (state = false, action) => {
  switch (action.type){
    case "TOGGLE_ADD_OCCASIONS":
      return !state;
    default:
      return state;
  }
}
