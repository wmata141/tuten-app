export const ADD_TO_CART = 'ADD_TO_CART'

const initialState = []

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:      
      return action.payload
    default:
      break;
  }
  return state
}

export default bookReducer
