import axios from 'axios';

export const getOccasions = (Occasions) => {
  return {
    type: "GET_OCCASIONS",
    payload: axios.get("http://localhost:8089/occasions")
  }
}



export const addOccasion = (first, last, relationship, email, age, birthday, birthdate, birthday_price, xmas, xmas_price, hanukka, hanukka_price, mothersday, mothersday_price, fathersday, fathersday_price, valentines, valentines_price, anniday, annidate, anniday_price, budget) => {
  console.log('action reached', birthday_price, anniday_price);
  return {
    type: "ADD_OCCASION",
    payload: axios.post("http://localhost:8089/occasions",
      {
        creator_id: 1,
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

export const deleteOccasion = (id) => {
  return {
    type: "DELETE_OCCASION",
    payload: axios.post(`http://localhost:8089/occasions/${id}/delete`)
  }
}
