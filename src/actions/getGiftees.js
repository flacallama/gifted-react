import axios from 'axios';

export const getGiftees = (giftees) => {
  return {
    type: "GET_GIFTEES",
    payload: axios.get("http://localhost:8089/giftees")
  }
}
