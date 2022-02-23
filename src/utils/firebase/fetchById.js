import { getDoc, doc} from "firebase/firestore";
import { db } from "./config";

const fetchItemById = async(id, name_collection) => {
    const docRef = doc(db, name_collection, id);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){
        let result = {id: docSnap.id, ...docSnap.data()};
        return result;
    } else{
        return {};
    }
}

export default fetchItemById;