import axios from 'axios'

export const getGifts = (gifts) => {
  return {
    type: "GET_GIFTS",
    payload: axios.get("http://localhost:8089/gifts")
  }
}
