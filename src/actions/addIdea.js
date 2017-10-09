export const addIdea = (idea) => {
  console.log('action addIdea');
  return {
    type: "ADD_IDEA",
    payload: idea
  }
}
