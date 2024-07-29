import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHqBjInVtV8zljHGHKX3rL3eUkpN3qKZI",
  authDomain: "g18-proyecto-final-72851.firebaseapp.com",
  projectId: "g18-proyecto-final-72851",
  storageBucket: "g18-proyecto-final-72851.appspot.com",
  messagingSenderId: "181917507435",
  appId: "1:181917507435:web:4bce1551d16f923c4db62e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to create a user. Recordar: createUserWithEmailAndPassword es async
export async function createUser(email,password){
  try{
    const authentication = await createUserWithEmailAndPassword(auth,email,password);
    console.log("succes: ",authentication.user);
  } catch(error){
    console.log(error.code);
    console.log(error.message);
  }
}