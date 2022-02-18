import NavBar from '../components/Nav/NavBar';
import ItemListContainer from '../components/Item/ItemListContainer';
import ItemDetailContainer from '../components/Item/Detail/ItemDetailContainer';
import { useEffect, useState } from 'react';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from '../components/Cart/Cart';

const { products } = require('../utils/products');

function Home() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    let is_ok = true;
    let mostrarProductos = (productos) => {
        return productos;
    }
    let consultaProductos = (time, task) => {
        return new Promise((resolve, reject) => {
            if (is_ok) {
                setTimeout(() => {
                    resolve(task)
                }, time);
            } else {
                reject("Error")
            }
        });
    }
    consultaProductos(2000, mostrarProductos(products))
        .then(respuesta => setProductos(respuesta))
        .catch(err => console.log(err))
  }, [setProductos])

  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route exact path="/" element={<ItemListContainer items={productos} />}/>
            <Route exact path="/category/:categoryId" element={<ItemListContainer items={productos} />} />
            <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
  );
}

export default Home;