import axios from 'axios';

export const getGiftees = (giftees) => {
  return {
    type: "GET_GIFTEES",
    payload: axios.get("http://localhost:8089/giftees")
  }
}


// e.target.first.value, e.target.last.value, e.target.relationship.value, e.target.email.value, e.target.age.value, this.state.birthday, this.state.birthdate, e.target.birthday_price.value, this.state.xmas, e.target.xmas_price.value, this.state.hanukka, e.target.hanukka_price.value, this.state.mothersday, e.target.mothersdat_price.value, this.state.fathersday, e.target.fathersday_price.value, this.state.valentines, e.target.valentines_price.value, this.state.anniday, this.state.annidate, e.target.anniday_price.value, e.target.budget.value

export const addGiftee = (first, last, relationship, email, age, birthday, birthdate, birthday_price, xmas, xmas_price, hanukka, hanukka_price, mothersday, mothersday_price, fathersday, fathersday_price, valentines, valentines_price, anniday, annidate, anniday_price, budget) => {
  console.log('action', first, last, relationship, email, age, birthday, birthdate, birthday_price, xmas, xmas_price, hanukka, hanukka_price, mothersday, mothersday_price, fathersday, fathersday_price, valentines, valentines_price, anniday, annidate, anniday_price, budget);
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
        anniday_price: anniday_price
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
