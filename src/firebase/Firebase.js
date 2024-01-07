import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider,
    signInWithPopup,
    GithubAuthProvider,
    FacebookAuthProvider,
    updateProfile,
} from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { app, db } from "./init";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();


export async function CreateNewUser(username, firstName, backName, email, password) {
    try {
        if (!username) throw new Error("Username tidak boleh kosong");
        if (!firstName) throw new Error("Nama Depan tidak boleh kosong");
        if (!backName) throw new Error("Nama Belakang tidak boleh kosong");
        if (!email) throw new Error("Email tidak boleh kosong");
        if (!password) throw new Error("Password tidak boleh kosong");

        const userCredentials = await createUserWithEmailAndPassword(auth, username, firstName, backName, email, password);
        return userCredentials;
    } catch (error) {
        console.error(`Error creating user: ${error.code}`, error.message);
        throw new Error("Gagal membuat pengguna. Silakan coba lagi.");
    }
}

export async function LoginUser(email, password) {
    try {
        if (!email) throw new Error("Email tidak boleh kosong");
        if (!password) throw new Error("Password tidak boleh kosong");

        const user = await signInWithEmailAndPassword(auth, email, password);
        return user;
    } catch (error) {
        console.error(`Error logging in: ${error.code}`, error.message);
        throw new Error("Gagal masuk. Pastikan email dan password benar.");
    }
}

export const GoogleAuth = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        await addUserDataToFirestore(user);
        console.log("Google Auth Success!");

        window.location.href = "/";
    } catch (error) {
        console.error("Google Auth Error:", error);
        throw new Error("Tidak dapat menyambungkan dengan Google.");
    }
};

export const GithubAuth = async () => {
    try {
        const result = await signInWithPopup(auth, githubProvider);
        const user = result.user;

        await addUserDataToFirestore(user);
        console.log("Github Auth Success!");

        window.location.href = "/";
    } catch (error) {
        console.error("Github Auth Error:", error);
        throw new Error(`Tidak dapat menyambungkan dengan GitHub. Error: ${error.message}`);
    }
};

export const FacebookAuth = async () => {
    try {
        const result = await signInWithPopup(auth, facebookProvider);
        const user = result.user;

        await addUserDataToFirestore(user);
        console.log("Facebook Auth Success!");

        window.location.href = "/";
    } catch (error) {
        console.error("Facebook Auth Error:", error);
        throw new Error("Tidak dapat menyambungkan dengan Facebook.");
    }
};

async function addUserDataToFirestore(user) {
    const docRef = await addDoc(collection(db, "users"), {
        displayName: user.username,
        firstName: user.firstName,
        backName: user.backName,
        email: user.email,
        timestamp: serverTimestamp(),
    });

    return docRef;
};

export async function updateUserProfile(userId, data) {
    try {
      await updateProfile(auth.currentUser, {
        username: data.username,
        firstName: data.firstName,
        backName: data.backName,
        email: data.email,
      });
  
      await db.collection("users").doc(userId).update({
        username: data.username,
        firstName: data.firstName,
        backName: data.backName,
        email: data.email,
      });
  
      return { success: true };
    } catch (error) {
      console.error("Error updating user profile:", error);
      throw new Error("Gagal memperbarui profil pengguna.");
    }
}
