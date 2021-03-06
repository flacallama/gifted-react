import axios from 'axios'

export const getGifts = (gifts) => {
  return {
    type: "GET_GIFTS",
    payload: axios.get("http://localhost:8089/gifts")
  }
}

export const addIdea = (id, idea, notes) => {
  // console.log('action addIdea');
  return {
    type: "ADD_IDEA",
    payload: axios.post("http://localhost:8089/gifts",
      {
        creator_id: 1,
        giftee_id: id,
        idea: idea,
        idea_notes: notes,
        is_past: false,
        date_given: null
      }
    )
  }
}

export const updateIdea = (id, idea, notes, past) => {
  console.log('inside action', id, idea, notes, past);
  return {
    type: "UPDATE_IDEA",
    payload: axios.post(`http://localhost:8089/gifts/${id}/edit`,
      {
        "idea": idea,
        "idea_notes": notes,
        "is_past": past

      }
    )
  }
}



export const deleteGift = (id) => {
  return {
    type: "DELETE_GIFT",
    payload: axios.post(`http://localhost:8089/gifts/${id}/delete`)
  }
}
