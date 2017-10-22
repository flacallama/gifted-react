export const setCurId = (id) => {
  console.log('hit action setCurId', id);
  return {
    type: "SET_CUR_ID",
    payload: id
  }
}
