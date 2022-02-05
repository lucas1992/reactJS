import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { useEffect, useState } from 'react';

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    let is_ok = true;
    const products = [
        {
          id: 10,
          title: "Agua mineral Glaciar sin gas botella 2 L",
          description: "Bebida sin alcohol",
          stock: 86,
          price: 45,
          pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_843913-MLA43773836976_102020-O.webp"
        },
        {
          id: 11,
          title: "Agua Villavicencio Con Gas X 1,5 Litros",
          description: "Bebida sin alcohol",
          stock: 56,
          price: 60,
          pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_725253-MLA48871549312_012022-O.webp"
        },
        {
          id: 12,
          title: "Martini Extra Dry 1000 Ml",
          description: "Bebida con alcohol",
          stock: 20,
          price: 100,
          pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_801384-MLA47766648341_102021-O.webp"
        },
        {
          id: 13,
          title: "Cerveza Quilmes Clásica",
          description: "American Adjunct Lager rubia lata 473 mL",
          stock: 76,
          price: 70,
          pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_874386-MLA44839809366_022021-O.webp"
        },
        {
          id: 14,
          title: "Vino tinto Malbec Novecento",
          description: "Raíces bodega D. Robino 750 ml",
          stock: 12,
          price: 66,
          pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_755237-MLA43940636784_102020-O.webp"
        },
        {
          id: 15,
          title: "Jugo de naranja BC líquido 1L",
          description: "Bebida sin alcohol, sabor a fruta y libre de gluten",
          stock: 150,
          price: 112,
          pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_712331-MLA43643315131_102020-O.webp"
        }
    ]
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
      <>
        <NavBar />
        {/* <ItemListContainer items={productos} /> */}
        <ItemDetailContainer />
      </>
  );
}

export default App;
