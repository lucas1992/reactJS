import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

const fetchItems = async() => {
    const querySnapshot = await getDocs(collection(db, "items"));
    const data_db = querySnapshot.docs.map(item => ({
        id: item.id,
        ...item.data()
    }));
    return data_db;
}

export default fetchItems;