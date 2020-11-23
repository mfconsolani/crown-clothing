import {CartActionTypes} from './cart.types';

// We don't need a payload because the reducer is going to automatically toggle true or false
// depending on the previous value of the state
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});


export const addItem  = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});