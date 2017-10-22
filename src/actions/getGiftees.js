import axios from 'axios';




export const getGiftees = (giftees) => {
  return {
    type: "GET_GIFTEES",
    payload: axios.get("http://localhost:8089/giftees")
  }
}



export const addGiftee = (first, last, relationship, email, age) => {
  console.log('action reached', first, last, relationship, email, age);
  return {
    type: "ADD_GIFTEE",
    payload: axios.post("http://localhost:8089/giftees",
      {
        creator_id: 1,
        first_name: first,
        last_name: last,
        relationship: relationship,
        email: email,
        age: age
      }
    )
  }
}

export const deleteGiftee = (id) => {
  console.log('entered delete action', id);
  return {
    type: "DELETE_GIFTEE",
    payload: axios.post(`http://localhost:8089/giftees/${id}/delete`)
  }
}
