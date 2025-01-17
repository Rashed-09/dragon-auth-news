import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const CreatedContext = createContext(null)

const AuthContext = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, useLoading] = useState(true)

    const createUser = (email, password) => {
        useLoading(true);
        return createUserWithEmailAndPassword( auth, email, password )
    }
    const logInWithEmailAndPassword = (email, password) => {
        useLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        useLoading(true);

        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged( auth, currentUser => {
            setUser(currentUser)
            useLoading(false)
        })
        return () => {
            unSubscribe()
        }
    },[])

    const dataInfo = {
        user,
        loading,
        createUser,
        logInWithEmailAndPassword,
        logOut,

    }
    return (
        <CreatedContext.Provider value={dataInfo}>
            {children}
        </CreatedContext.Provider>
    )
};

export default AuthContext;
AuthContext.propTypes = {
    children: PropTypes. node
}