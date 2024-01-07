import { app } from "./init";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    getDocs, 
    doc, 
    getDoc,
    deleteDoc 
} from "firebase/firestore";

const db = getFirestore(app);

/**
 * 
 * @param {String} collectionName 
 * @param {Object} body 
 * @returns 
 */

export async function SendToFirebase(collectionName, body) {
    const response = await addDoc(collection(db, collectionName), body);
    return response;
}

/**
 * 
 * @param {string} CollectionName 
 * @returns 
 */

export const GetAllData = async (CollectionName) => {
    if (!CollectionName) return;
    const res = await getDocs(collection(db, CollectionName));
    return res;
}

export async function GetDocumentById(collectionName, id) {
    const documentRef = doc(db, collectionName, id);
    const docSnap = await getDoc(documentRef);
    return docSnap.data();
}

export async function DeleteDocumentById(collectionName, documentId) {
    try {
        const documentRef = doc(db, collectionName, documentId);
        await deleteDoc(documentRef);
        console.log(`Dokumen dengan ID ${documentId} berhasil dihapus dari koleksi ${collectionName}`);
    } catch (error) {
        console.error("Error deleting document:", error.message);
        throw error;
    }
}