export const CART_ACTION = 'CART_ACTION';

const initialState = {
  cartData: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CART_ACTION:
      return { ...state, cartData: action.data };
    default:
      return state;
  }
}
