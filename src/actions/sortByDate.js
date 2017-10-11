export const sortByDate = (value) => {
  console.log("hit sortbyDate in action");
  return {
    type: "SORT_GIFTEES_BY",
    payload: value
  }
}
