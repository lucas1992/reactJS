import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

const fetchItems = async(name_collection) => {
    const querySnapshot = await getDocs(collection(db, name_collection));
    const data_db = querySnapshot.docs.map(item => ({
        id: item.id,
        ...item.data()
    }));
    return data_db;
}

export default fetchItems;