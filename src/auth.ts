import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase'; // Assuming you have set up Firestore


// Sign up with Email and Password (unchanged)
export const signUp = async (email:string, password:string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save additional user details in Firestore
    await setDoc(doc(db, 'users', user.uid), {
      email: user.email,
      createdAt: new Date(),
    });

    // Store user information in localStorage
    localStorage.setItem('user', JSON.stringify(user));

    return user;
  } catch (error) {
    console.error('Erreur lors de la creation du compte :', error);
    throw error;
  }
};

// Login with Email and Password (unchanged)
export const login = async (email:string, password:string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Store user information in localStorage
    localStorage.setItem('user', JSON.stringify(user));

    return user;
  } catch (error) {
    console.error('Erreur lors de la connexion :', error);
    throw error;
  }
};

// Get user details after login (unchanged)
export const getUserDetails = async (uid:string) => {
  try {
    const userDoc = await getDoc(doc(db, 'users', uid));
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

// Login with Google
export const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    const user = result.user;
    const userDoc = await getDoc(doc(db, 'users', user.uid));

    if (!userDoc.exists()) {
      // Save user details if it's their first time logging in
      await setDoc(doc(db, 'users', user.uid), {
        name: user.displayName,
        email: user.email,
        createdAt: new Date(),
      });
    }

    // Store user information in localStorage
    localStorage.setItem('user', JSON.stringify(user));

    return user;
  } catch (error) {
    console.error('Erreur lors de la connexion avec Google :', error);
    throw error;
  }
};
