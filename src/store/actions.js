import axios from 'axios';

// Fetch electronic items
export const getElectronicItems = ({ commit }) => {
    axios.get('https://fakestoreapi.com/products/category/electronics')
    .then(response => {
        commit('setElectronicItems', response.data);
    })
}

// Fetch Mens items
export const getMensItems = ({ commit }) => {
    axios.get("https://fakestoreapi.com/products/category/men's clothing")
    .then(response => {
        commit('setMensItems', response.data);
    })
}

// Fetch jewellery items
export const getJewelleryItems = ({ commit }) => {
    axios.get("https://fakestoreapi.com/products/category/jewelery")
    .then(response => {
        commit('setJewelleryItems', response.data);
    })
}

// Fetch womens items
export const getWomensItems = ({ commit }) => {
    axios.get("https://fakestoreapi.com/products/category/women's clothing")
    .then(response => {
        commit('setWomensItems', response.data);
    })
}

// Fetch All items
export const getAllItems = ({ commit }) => {
    axios.get("https://fakestoreapi.com/products")
    .then(response => {
        commit('setAllItems', response.data);
    })
}

// View Item Detail
export const getItem = ({ commit }, itemId) => {
    axios.get(`https://fakestoreapi.com/products/${itemId}`)
    .then(response => {
        commit('setItem', response.data);
    })
}

// Add Items to cart
export const addItemToCart = ({ commit }, { item, quantity }) => {
    commit('addToCartItem', { item, quantity });
}

//remove product from cart 
export const removeItemFromCart = ({ commit }, item) => {
    commit('removeItem', item);
} 

//clear all items from cart
export const clearCartItems = ({ commit }) => {
    commit('clearItems');
}