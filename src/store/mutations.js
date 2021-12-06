// Add electronics item to electronic state
export const setElectronicItems = (state, electronicItems) => {
    state.electronicItems = electronicItems;
}

// Add mens item to mens state
export const setMensItems = (state, mensItems) => {
    state.mensItems = mensItems;
}

// Add jewellery item to jewellery state
export const setJewelleryItems = (state, jewelleryItems) => {
    state.jewelleryItems = jewelleryItems;
}

// Add womens item to womens state
export const setWomensItems = (state, womensItems) => {
    state.womensItems = womensItems;
}

// Add all item to state
export const setAllItems = (state, allItems) => {
    state.allItems = allItems;
}


// Display item detail
export const setItem = (state,  item) => {
    state.item = item;
}

// Push cart items into cart state or array
export const addToCartItem = (state, {item, quantity}) => {

    let productInCart = state.cart.find(product => {
        return product.item.id === item.id;
    });

    if(productInCart) {
        productInCart.quantity += quantity;
        return;
    }

    state.cart.push({
        item,
        quantity
    })
}

//remove product from cart
export const removeItem = (state, item) => {
    state.cart = state.cart.filter(items => {
        return items.item.id !== item.id;
    });
}

// Clear all cart items
export const clearItems = (state) => {
    state.cart = [];
}