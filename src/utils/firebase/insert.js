import { collection, addDoc } from "firebase/firestore";
import { db } from "./config";

const InsertDB = async(doc, name_collection) => {
    const itemsRef = collection(db, name_collection)
    return addDoc(itemsRef, doc);
}

export default InsertDB;