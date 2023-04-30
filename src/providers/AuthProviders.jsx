/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
export const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProviders = ({ children }) => {


    const createUser  = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password) => {
      return signInWithEmailAndPassword(auth,email,password);
    }

  const user = null;
  const authInfo = { user,createUser,signIn };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
