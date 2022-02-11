import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { useEffect, useState } from 'react';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContext from './components/CartContext';
import Cart from './components/Cart';


const { products } = require('./utils/products');

function App() {
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
  }, [])

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

export default App;
