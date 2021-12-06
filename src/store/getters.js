export const countItems = (state) => {

    return state.cart.length;

}

export const cartTotalPrice = (state) => {

    let total = 0;

    state.cart.forEach(product => {
        total += product.item.price * product.quantity;
    })

    return total;
    
}