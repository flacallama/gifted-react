export default (state = [], actions) => {
  switch (actions.type){
    case "GET_GIFTS_PENDING":
      return state;
    case "GET_GIFTS_FULFILLED":
      return [...actions.payload.data.rows];
    case "ADD_IDEA_PENDING":
    console.log('add pending');
      return state
    case "ADD_IDEA_FULFILLED":
    console.log('add fulfilled');
      return [...actions.payload.data];
    case "DELETE_GIFT_PENDING":
      return state;
    case "DELETE_GIFT_FULFILLED":
      return [...actions.payload.data]
    case "UPDATE_IDEA_PENDING":
    console.log('pending');
      return state;
    case "UPDATE_IDEA_FULFILLED":
    console.log('fulfiled');
      return [...actions.payload.data]
    default:
      return state;
  }
}
