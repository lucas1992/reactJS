import { doc, updateDoc } from "firebase/firestore";
import { db } from "./config";

const UpdateDB = async(id, name_collection, dict_update) => {
    const docRef = doc(db, name_collection, id);
    return updateDoc(docRef, dict_update);
}

export default UpdateDB;