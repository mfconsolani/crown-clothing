import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'; //We also want to persist our Rootreducer
import storage from 'redux-persist/lib/storage' // We import the actual localStorage object on our
                                                // window browser

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
    key: 'root', // Which represents at what point inside of our reducing object do we want to start storing everything
    storage, 
    whitelist: ['cart'] // array containing the string name of the reducers we want to store
}

const rootReducer = combineReducers({
    user: userReducer, // This persistance is being handled ny firebase auth at this point
    cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
// this will return a modified version of the rootReducer with the persistConfig on top of it