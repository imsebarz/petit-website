export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";

export const initialState = {
  basket: [],
};

export const getSubtotal = (basket) =>
  basket?.reduce((amount, item) => item.price * item.amount + amount, 0);

export const getAmount = (basket) =>
  basket?.reduce((amount, item) => item.amount + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TO_BASKET:
      const index = state.basket.findIndex(({ id }) => id === action.item.id);
      if (index !== -1) {
        return {
          ...state,
          basket: [
            ...state.basket.map((el) =>
              el.id === action.item.id ? { ...el, amount: el.amount + 1 } : el
            ),
          ],
        };
      } else {
        action.item.amount = 1;
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      }
    case REMOVE_FROM_BASKET:
      return {
        ...state,
        basket: [...state.basket.filter((item) => item.id !== action.id)],
      };
    default:
      return state;
  }
};

export default reducer;
