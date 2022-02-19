import React, { useState, useEffect } from 'react';

export const CartContext = React.createContext();

const CartContextProvider = ({ children }) => {
    let [ cartList, setCartList ] = useState([]);
    let [ count, setCount ] = useState(0);
    let [ total, setTotal ] = useState(0);
    let [ cartIds, setCartIds ] = useState(new Set()); // para búsquedas optimizadas

    useEffect(() =>{
        setCount(cartList.reduce((acc, item) => acc + item.quantity, 0));
        setTotal(cartList.reduce((acc, item) => acc + item.quantity * parseFloat(item.item.cost), 0));
    }, [cartList])

    function addItem(item, quantity){
        if(isInCart(item.id)){
            updateQuantity(item, quantity);
            return
        }
        setCartList([...cartList, {item, "id": item.id, "quantity": quantity}]);

        let newCartIds = cartIds;
        newCartIds.add(item.id);
        setCartIds(newCartIds);
    }

    function updateQuantity(item, quantity){
        let itemInCart = cartList.find((_item) => _item.id === item.id);
        itemInCart.quantity += quantity;
        setCartList([
            ...cartList.filter((_item) => _item.id !== itemInCart.id),
            { ...itemInCart },
        ])
    }

    function removeItem(id){
        setCartList(cartList.filter(item => item.id !== id));
        const newCartIds = cartIds;
        newCartIds.delete(id);
        setCartIds(newCartIds);
    }

    function clear(){
        setCartList([]);
        setCartIds(new Set());
    }

    function isInCart(id){
        const result = (cartIds.has(id)) ? true : false;
        return result;
    }

    function getItem(id){
        if(!isInCart(id)){
            return false;
        }
        const result = cartList.filter(item => item.id === id);
        return result;
    }

    return (
        <CartContext.Provider value={{ cartList, addItem, isInCart, removeItem, clear, getItem, count: count, total: total}}>
            { children }
        </CartContext.Provider>
    );

}

export default CartContextProvider;