import NavBar from '../components/Nav/NavBar';
import ItemListContainer from '../components/Item/ItemListContainer';
import ItemDetailContainer from '../components/Item/Detail/ItemDetailContainer';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import Checkout from '../components/Checkout/Checkout';


function Home() {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route exact path="/" element={<ItemListContainer />}/>
            <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
            <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
  );
}

export default Home;