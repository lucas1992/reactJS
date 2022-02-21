import { db } from "./config";
import { useEffect } from 'react';
import { collection, addDoc } from "firebase/firestore";
const { products } = require('../products');


function UploadDocuments() {
    const uploadDocuments = (doc) => {
        const itemsRef = collection(db, 'items')
        return addDoc(itemsRef, doc);
    };

    useEffect(() => {
        products.forEach((doc) => {
            uploadDocuments(doc)
                .then (result => { console.log(result); })
                .catch(error => console.log(error));
        });
    }, [products, uploadDocuments])

  return (
    <>
    </>
  );
}

export default UploadDocuments;