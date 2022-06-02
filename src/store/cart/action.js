export const CART_ACTION = 'CART_ACTION';

export const getDataCart = (stateData) => (dispatch) => {
  return dispatch({
    type: CART_ACTION,
    data: stateData,
  });
};
