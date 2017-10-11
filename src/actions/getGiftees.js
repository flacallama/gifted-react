import axios from 'axios';

export const getGiftees = (giftees) => {
  return {
    type: "GET_GIFTEES",
    payload: axios.get("http://localhost:8089/giftees")
  }
}



export const addGiftee = (first, last, relationship, email, age, birthday, birthdate, xmas, hanukka, mothersday, fathersday, valentines, anniday, annidate, budget) => {
  console.log('action', first, last, relationship, email, age, birthday, xmas, hanukka, mothersday, fathersday, valentines, anniday, annidate, budget);
  return {
    type: "ADD_GIFTEE",
    payload: axios.post("http://localhost:8089/giftees",
      {
        creator_id: 1,
        first_name: first,
        last_name: last,
        relationship: relationship,
        budget: budget,
        email: email,
        age: age,
        birthday: birthday,
        birthdate: birthdate,
        xmas: xmas,
        hanukka: hanukka,
        mothersday: mothersday,
        fathersday: fathersday,
        valentines: valentines,
        anniday: anniday,
        annidate: annidate
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
