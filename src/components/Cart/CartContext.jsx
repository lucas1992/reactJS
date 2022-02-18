import React, { useState } from 'react';

export const CartContext = React.createContext();

const CartContextProvider = ({ children }) => {
    const [ cart, setCart ] = useState([]);
    const [ count, setCount ] = useState(0);
    const [ cartIds, setCartIds ] = useState(new Set()); // para búsquedas optimizadas

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
        setTotalCount();
    }

    function updateQuantity(item, quantity){
        const newCart = cart;
        newCart.forEach((element, index) => {
            if(item.id === element.id){
                element.quantity = quantity;
            }
        })
        setCart(newCart);
        setTotalCount();
    }

    function removeItem(id){
        setCart(cart.filter(item => item.id !== id));
        const newCartIds = cartIds;
        newCartIds.delete(id);
        setCartIds(newCartIds);
        setTotalCount();
        console.log(cart.filter(item => item.id !== id));
        console.log(count);
        console.log(cart);
    }

    function clear(){
        setCart([]);
        setCartIds(new Set());
        setTotalCount();
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

    function setTotalCount(){
        let quantity = 0;
        cart.forEach((item) => {
            quantity += item.quantity;
        })
        setCount(quantity);
    }

    return (
        <CartContext.Provider value={{ cart, addItem, isInCart, removeItem, clear, getItem, count: count}}>
            { children }
        </CartContext.Provider>
    );

}

export default CartContextProvider;