import { authentication } from "../services/firebase";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { useUser, initialUserState } from "./user";

const AuthStateChangeProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const user = useUser()
    const { SetUser } = user
    const InitiateAuthStateChange = () => {
        authentication().onAuthStateChanged((user) => {
            if (user) {
                console.log('User is authenticated')
                SetUser({ email: user.email, uid: user.uid})
            }
            else {
                console.log('User is not authenticated')
                SetUser({initialUserState})
            }
            setIsLoading(false)
        })
    }
    useEffect(() =>{
        InitiateAuthStateChange()
    }, [])

    if (isLoading) {
        return <CircularProgress />
    }

    return children
}

export default AuthStateChangeProvider