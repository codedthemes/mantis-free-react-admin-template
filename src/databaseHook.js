import { initializeApp } from 'firebase/app';
import {
  getFirestore, collection

} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAMN5ITUWUtL0d8c_hY4LrYU0XVMSG9Pro",
  authDomain: "products-project-3e404.firebaseapp.com",
  databaseURL: "https://products-project-3e404-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "products-project-3e404",
  storageBucket: "products-project-3e404.appspot.com",
  messagingSenderId: "891166572925",
  appId: "1:891166572925:web:64c01d0a4608f22c4a4c14"
};

const getColRef = () => {
  //init firebase app
  initializeApp(firebaseConfig)

  // init services
  const db = getFirestore()

  //collection ref
  const colRef = collection(db, 'ourproducts')
  return colRef;
}
export default getColRef;