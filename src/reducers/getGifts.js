export default (state = [], actions) => {
  switch (actions.type){
    case "GET_GIFTS_PENDING":
      return state;
    case "GET_GIFTS_FULFILLED":
      return [...actions.payload.data.rows];
    case "ADD_IDEA_PENDING":
    console.log('reducer pending');
      return state
    case "ADD_IDEA_FULFILLED":
    console.log('reducer addIdea', actions.payload);
      return [...actions.payload.data];
    case "DELETE_GIFT_PENDING":
    console.log("hit delete pending")
      return state;
    case "DELETE_GIFT_FULFILLED":
      console.log("hit delete fulfilled")
      return [...actions.payload.data]
    default:
      return state;
  }
}
