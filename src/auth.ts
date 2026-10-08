import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase'; // Assuming you have set up Firestore


// Creation du user a travers Email et Password (unchanged)
export const signUp = async (name:string, email:string, password:string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    // Save additional user details in Firestore
    await setDoc(doc(db, 'users', user.uid), {
      name,
      email: user.email,
      createdAt: new Date(),
    });
    
    const user_en_localstorage = {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      createdAt: new Date(),
    }
    // Store user information in localStorage
    localStorage.setItem('user', JSON.stringify(user_en_localstorage));

    return user;
  } catch (error) {
    console.error('Erreur lors de la creation du compte :', error);
    throw error;
  }
};

// Connexion avec Email et Password (unchanged)
export const login = async (email:string, password:string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const user_en_localstorage = {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      createdAt: new Date(),
    }
    // Store user information in localStorage
    localStorage.setItem('user', JSON.stringify(user_en_localstorage));

    return user;
  } catch (error) {
    console.error('Erreur lors de la connexion :', error);
    throw error;
  }
};

// Recuperation des details du user apres la connexion (unchanged)
export const getUserDetails = async (uid:string) => {
  try {
    const useRef = doc(db, 'users', uid);
    const userDoc = await getDoc(useRef);
    if (userDoc.exists()) {
      return userDoc.data();
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des détails de l\'utilisateur :', error);
    throw error;
  }
};

// Connexion avec Google
export const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    const user = result.user;
    const user_en_localstorage = {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      createdAt: new Date(),
    }
    const userDoc = await getDoc(doc(db, 'users', user.uid));

    if (!userDoc.exists()) {
      // On cree le document(on dit ca car c'est du NoSQL) de l'utilisateur dans Firestore s'il n'existe pas
      await setDoc(doc(db, 'users', user.uid), {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        createdAt: new Date(),
      });
    }

    // Store user information in localStorage
    localStorage.setItem('user', JSON.stringify(user_en_localstorage));

    return user;
  } catch (error) {
    console.error('Erreur lors de la connexion avec Google :', error);
    throw error;
  }
};
