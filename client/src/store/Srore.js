// import { createStore } from 'redux';
// import rootReducer from '../Reducers/index'; // Assurez-vous que le chemin est correct

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;

// src/store/store.js

// import { createStore, combineReducers } from 'redux';
// import cartReducer from '../Reducers/CartReducer';

// const rootReducer = combineReducers({
//   cart: cartReducer,
// });

// const store = createStore(rootReducer);

// export default store;

// src/store/store.js

import { createStore, combineReducers } from 'redux';
import cartReducer from '../Reducers/CartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;


