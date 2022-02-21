import ItemList from './ItemList';
import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchItems from "../../utils/firebase/fetch";
import queryDB from "../../utils/firebase/query";

function ItemListContainer(props) {

  const [productos, setProdutos] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
        queryDB("category.id", "==", parseInt(categoryId))
            .then(items => {
                ((items.length) ? setProdutos(items) : (fetchItems().then(items => { setProdutos(items) })));
            })
            .catch(error => console.log(error));
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