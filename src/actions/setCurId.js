export const setCurId = (id) => {
  console.log('hit action setCurId', id);
  return {
    type: "SET_CUR_ID",
    payload: id
  }
}

export const resetCurId = () => {
  console.log('hit action reset curid')
  return {
    type: "RESET_CUR_ID"
  }
}
