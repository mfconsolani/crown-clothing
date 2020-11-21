import {CartActionTypes} from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});
// We don't need a payload because the reducer is going to automatically toggle true or false
// depending on the previous value of the state