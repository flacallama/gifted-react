import axios from 'axios';

export const getGiftees = (giftees) => {
  return {
    type: "GET_GIFTEES",
    payload: axios.get("http://localhost:8089/giftees")
  }
}



export const addGiftee = (first, last, relationship, email, age, birthday, birthdate, birthday_price, xmas, xmas_price, hanukka, hanukka_price, mothersday, mothersday_price, fathersday, fathersday_price, valentines, valentines_price, anniday, annidate, anniday_price, budget) => {
  console.log('action reached', first);
  return {
    type: "ADD_GIFTEE",
    payload: axios.post("http://localhost:8089/giftees",
      {
        creator_id: 1,
        first_name: first,
        last_name: last,
        relationship: relationship,
        email: email,
        age: age,
        birthday: birthday,
        birthdate: birthdate,
        birthday_price: birthday_price,
        xmas: xmas,
        xmas_price: xmas_price,
        hanukka: hanukka,
        hanukka_price: hanukka_price,
        mothersday: mothersday,
        mothersday_price: mothersday_price,
        fathersday: fathersday,
        fathersday_price: fathersday_price,
        valentines: valentines,
        valentines_price: valentines_price,
        anniday: anniday,
        annidate: annidate,
        anniday_price: anniday_price,
        budget: budget,
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
