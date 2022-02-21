import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./config";

const queryDB = async(key, operator, value) => {
    if(value === undefined){
        return [];
    }
    const itemsRef = collection(db, "items");
    const q = query(itemsRef, where(key, operator, value));
    const querySnapshot = await getDocs(q);

    const data_db = querySnapshot.docs.map(item => ({
        id: item.id,
        ...item.data()
    }));
    return data_db;
}

export default queryDB;