import { Alert } from "react-native";
import FIREBASE from "../config/FIREBASE";
import { clearStorage, getData, storeData } from "../utils";

const db = FIREBASE.firestore();

/* ================= REGISTER ================= */
export const registerUser = async (data, password) => {
  try {
    const success = await FIREBASE.auth()
      .createUserWithEmailAndPassword(data.email, password);

    const dataBaru = {
      ...data,
      uid: success.user.uid,
      createdAt: new Date(),
    };

    await db.collection("users")
      .doc(success.user.uid)
      .set(dataBaru);

    await storeData("user", dataBaru);
    return dataBaru;
  } catch (error) {
    throw error;
  }
};

/* ================= LOGIN ================= */
export const loginUser = async (email, password) => {
  try {
    const success = await FIREBASE.auth()
      .signInWithEmailAndPassword(email, password);

    const userDoc = await db
      .collection("users")
      .doc(success.user.uid)
      .get();

    if (userDoc.exists) {
      await storeData("user", userDoc.data());
      return userDoc.data();
    } else {
      throw new Error("User data not found");
    }
  } catch (error) {
    throw error;
  }
};

/* ================= LOGOUT ================= */
export const logoutUser = async () => {
  await FIREBASE.auth().signOut();
  clearStorage();
};

/* ================= ADD NOTE ================= */
export const addNote = async (data) => {
  try {
    const userData = await getData("user");

    if (!userData) {
      Alert.alert("Error", "Login Terlebih Dahulu");
      return;
    }

    const dataBaru = {
      ...data,
      uid: userData.uid,
      createdAt: new Date(),
    };

    await db.collection("notes").add(dataBaru);
    console.log("Note added successfully");
  } catch (error) {
    throw error;
  }
};

/* ================= GET NOTE ================= */
export const getNote = async () => {
  try {
    const userData = await getData("user");
    
    // Remove the where clause since rules allow reading all notes
    const snapshot = await db
      .collection("notes")
      .get();
    
    // Filter client-side instead
    const allNotes = snapshot.docs.map(doc => ({
      noteId: doc.id,
      ...doc.data(),
    }));
    
    return allNotes.filter(note => note.uid === userData.uid);
  } catch (error) {
    console.error("Error fetching notes:", error);
    return [];
  }
};

/* ================= EDIT NOTE ================= */
export const editNote = async (noteId, updatedData) => {
  try {
    await db.collection("notes").doc(noteId).update(updatedData);
    console.log("Note updated successfully");
  } catch (error) {
    throw error;
  }
};

/* ================= DELETE NOTE ================= */
export const deleteNote = async (noteId) => {
  try {
    await db.collection("notes").doc(noteId).delete();
    console.log("Note deleted successfully");
  } catch (error) {
    throw error;
  }
};
