import ItemList from './ItemList';
import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function ItemListContainer(props) {

  const [productos, setProdutos] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
        switch(categoryId) {
          case "all":
            setProdutos(props.items);
            break;
          case "alcohol":
            let products_alcohol = props.items.filter(prod => prod.category.id !== 9);
            setProdutos(products_alcohol);
            break;
          case "not-alcohol":
            let products_not_alcohol = props.items.filter(prod => prod.category.id === 9);
            setProdutos(products_not_alcohol);
            break;
          case "register":
              alert("Sección de registro aún no desarrollada");
              setProdutos(props.items);
              break;
          case "login":
              alert("Sección de login aún no desarrollada");
              setProdutos(props.items);
              break;
          default:
            setProdutos(props.items);
            break;


        }
  }, [categoryId, setProdutos])


  return (
    <>
        <section id="section-products-list">
            <div className="flex-container">
                <ItemList items={productos} />
            </div>
        </section>
    </>
  );
}


export default ItemListContainer;