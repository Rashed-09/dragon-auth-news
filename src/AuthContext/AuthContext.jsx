import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const CreatedContext = createContext(null)

const AuthContext = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword( auth, email, password )
    }
    const logInWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged( auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    },[])

    const dataInfo = {
        user,
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