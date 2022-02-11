import React, { useContext, useState } from 'react';

const CartContextProvider = React.createContext(false);

export default function CartContext({ defaultValue=[], children}){
    const [ cart, setCart ] = useState(defaultValue);
    const [ cartIds, setCartIds ] = useState(new Set()); // para búsquedas optimizadas

    function addItem(item, quantity){
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
    }

    function updateQuantity(item, quantity){
        const newCart = cart;
        newCart.forEach((element, index) => {
            if(item.id === element.id){
                element.quantity = quantity;
            }
        })
        setCart(newCart);
    }

    function removeItem(id){
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);

        const newCartIds = cartIds;
        newCartIds.delete(id);
        setCartIds(newCartIds);

    }

    function clear(){
        setCart([]);
        setCartIds(new Set());
    }

    function isInCart(id){
        const result = (id in cartIds) ? true : false;
        return result;
    }

    function getItem(id){
        if(!isInCart()){
            return false;
        }
        const result = cart.filter(item => item.id === id);
        return result;
    }


    return <CartContextProvider.Provider value={{ cart, addItem, isInCart, removeItem, clear, getItem, cartSize: cart.length}}>
        {children}
    </CartContextProvider.Provider>

}