import axios from 'axios';

export const getGiftees = (giftees) => {
  return {
    type: "GET_GIFTEES",
    payload: axios.get("http://localhost:8089/giftees")
  }
}

export const addGiftee = (giftee) => {
  return {
    type: "ADD_GIFTEE",
    payload: axios.get("")
  }
}
