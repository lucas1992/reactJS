import React, { useState } from 'react';

export const CartContext = React.createContext();

const CartContextProvider = ({ children }) => {
    let [ cart, setCart ] = useState([]);
    let [ count, setCount ] = useState(0);
    let [ total, setTotal ] = useState(0);
    let [ cartIds, setCartIds ] = useState(new Set()); // para búsquedas optimizadas

    function addItem(item, quantity){
        if(quantity <= 0){
            removeItem(item.id);
            return
        }
        if(isInCart(item.id)){
            updateQuantity(item, quantity);
            return
        }
        const newCart = cart;
        newCart.push({"item": item, "id": item.id, "quantity": quantity});
        setCart(newCart);

        const newCartIds = cartIds;
        newCartIds.add(item.id);
        setCartIds(newCartIds);
        setTotalCountAndPrice();
    }

    function updateQuantity(item, quantity){
        const newCart = cart;
        newCart.forEach((element, index) => {
            if(item.id === element.id){
                element.quantity = quantity;
            }
        })
        setCart(newCart);
        setTotalCountAndPrice();
    }

    function removeItem(id){
        setCart(cart.filter(item => item.id !== id));
        const newCartIds = cartIds;
        newCartIds.delete(id);
        setCartIds(newCartIds);
        setTotalCountAndPrice();
    }

    function clear(){
        setCart([]);
        setCartIds(new Set());
        setTotalCountAndPrice();
    }

    function isInCart(id){
        const result = (cartIds.has(id)) ? true : false;
        return result;
    }

    function getItem(id){
        if(!isInCart(id)){
            return false;
        }
        const result = cart.filter(item => item.id === id);
        return result;
    }

    function setTotalCountAndPrice(){
        let quantity = 0;
        let price = 0;
        cart.forEach((item) => {
            quantity += item.quantity;
            price += item.quantity * parseFloat(item.item.cost);
        })
        setCount(quantity);
        setTotal(price);
    }

    return (
        <CartContext.Provider value={{ cart, addItem, isInCart, removeItem, clear, getItem, count: count, total: total}}>
            { children }
        </CartContext.Provider>
    );

}

export default CartContextProvider;