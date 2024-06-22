// // src/reducers/cartReducer.js
// const initialState = {
//     items: [],
//   };
  
//   const cartReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'ADD_TO_CART':
//         const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
//         if (existingItemIndex >= 0) {
//           const updatedItems = state.items.map((item, index) =>
//             index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
//           );
//           return {
//             ...state,
//             items: updatedItems,
//           };
//         } else {
//           return {
//             ...state,
//             items: [...state.items, { ...action.payload, quantity: 1 }],
//           };
//         }
//       default:
//         return state;
//     }
//   };
  
//   export default cartReducer;
  

// src/reducers/cartReducer.js

// import { ADD_TO_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from '../actions/cartAction';

// const initialState = {
//   items: [],
// };

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       const existingItem = state.items.find(item => item.id === action.payload.id);
//       if (existingItem) {
//         return {
//           ...state,
//           items: state.items.map(item =>
//             item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
//           ),
//         };
//       } else {
//         return {
//           ...state,
//           items: [...state.items, { ...action.payload, quantity: 1 }],
//         };
//       }

//     case INCREMENT_QUANTITY:
//       return {
//         ...state,
//         items: state.items.map(item =>
//           item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
//         ),
//       };

//     case DECREMENT_QUANTITY:
//       return {
//         ...state,
//         items: state.items.map(item =>
//           item.id === action.payload && item.quantity > 1
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         ),
//       };

//     default:
//       return state;
//   }
// };

// export default cartReducer;


//FAHATELO 
// src/reducers/cartReducer.js

import { ADD_TO_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from '../actions/cartAction';

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }

    case INCREMENT_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case DECREMENT_QUANTITY:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;




  