import { useEffect, useState } from "react";
import initAuth from '../Firebase/init'
import { GoogleAuthProvider,signInWithPopup,getAuth,signOut,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

initAuth()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    ///google sign method implemented
    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false))
    };
    //log out implemented
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})

            })
            .finally(() => setIsLoading(false))
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])

    //register method implemented
    const handleUserRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                setError("");
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }
    //login method implemented
    const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                setError("");
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }


        const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('./services.json')
        .then(res =>res.json())
        .then(data =>setServices(data))
    },[])
    return {
        user,
        error,
        isLoading,
        setError,
        signInUsingGoogle,
        handleUserRegister,
        handleUserLogin,
        logOut,
        services

    };

}

export default useFirebase