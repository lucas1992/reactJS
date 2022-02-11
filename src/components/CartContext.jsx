import React, { useContext, useState } from 'react';

export const CartContext = React.createContext();

const CartContextProvider = ({ children }) => {
    const [ cart, setCart ] = useState([]);
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
        setCart(cart.filter(item => item.id !== id));
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


    return (
        <CartContext.Provider value={{ cart, addItem, isInCart, removeItem, clear, getItem, cartSize: cart.length}}>
            { children }
        </CartContext.Provider>
    );

}

export default CartContextProvider;