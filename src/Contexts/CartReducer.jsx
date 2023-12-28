export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      state.item.push(action.payload)
      return {
        ...state
      }
    }
    case "REMOVE": {
      console.log(action.payload);
      return {...state}
    }
    default:
      console.log(state);
      return {...state}
  }
};

export const INITIAL_STATE = {
  item: [],
};