import { createContext, useEffect, useState } from "react";
import app from "./../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

 const createUser = (email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
 }
 const signinUser = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
 }
 const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
 }  

 useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, loggedUser=>{
        setUser(loggedUser);
        setLoading(false);
    })
    return ()=>{
        unsubscribe()
    }
 },[])


  const userInfo = {
    user,
    loading,
    createUser,
    signinUser,
    logOut
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
