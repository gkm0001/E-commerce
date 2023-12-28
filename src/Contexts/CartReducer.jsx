export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      state.item.push(action.payload)
      return {
        ...state
      }
    }
    case "REMOVE": {
      const checkForItem = (arr, val) => {
        arr.filter((item, i) => {
          if(item._id === val){
            return state.item.splice(i, 1)
          }
          })
        };
      checkForItem(state.item, action.payload)
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