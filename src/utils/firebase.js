import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBXwU1Bu-1Yyne3UPB7lMVPlO44Jk9wCsM",
    authDomain: "waseem-project-dd097.firebaseapp.com",
    projectId: "waseem-project-dd097",
    storageBucket: "waseem-project-dd097.appspot.com",
    messagingSenderId: "1058966257173",
    appId: "1:1058966257173:web:41f7ddbe70c2dd4a7d181c",
    
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{app,auth,}