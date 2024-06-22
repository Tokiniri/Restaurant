// // src/actions/cartActions.js
// export const addToCart = (item) => {
//     return {
//       type: 'ADD_TO_CART',
//       payload: item,
//     };
//   };

// src/actions/cartAction.js

// // actions/cartAction.js
// export const incrementQuantity = (id) => ({
//   type: 'INCREMENT_QUANTITY',
//   payload: id,
// });

// export const decrementQuantity = (id) => ({
//   type: 'DECREMENT_QUANTITY',
//   payload: id,
// });

// export const removeFromCart = (id) => ({
//   type: 'REMOVE_FROM_CART',
//   payload: id,
// });


// src/actions/cartAction.js

export const ADD_TO_CART = 'ADD_TO_CART';
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const incrementQuantity = (id) => ({
  type: INCREMENT_QUANTITY,
  payload: id,
});

export const decrementQuantity = (id) => ({
  type: DECREMENT_QUANTITY,
  payload: id,
});



  
  