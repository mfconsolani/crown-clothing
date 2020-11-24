// This file will hold any utility functions related to our cart redux code

export const addItemToCart = (cartItems, cartItemToAdd) => {
    // The find() method searches through an array and gives you 1 item based on your provided test. 
    // Array find() only returns one item. If you want to get more than one item, look at filter()
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

    // find() will return the first item found and store that found item in the existingCartItem constant if
    // the id of the cart item we are adding matches one in the cart items list; otherwise, it will
    // return undefined

    if (existingCartItem) {
        // We need map because we need to return new versions of our state so our components know
        // that they have to re-render properly
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
            )
    } else {
        // At some point, an item will always be added for the first time; when that happens, quantity property
        // will be added to the object. 
        return [...cartItems, {...cartItemToAdd, quantity: 1} ]
    }
};


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    } else {
        return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id 
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem);
    };
}