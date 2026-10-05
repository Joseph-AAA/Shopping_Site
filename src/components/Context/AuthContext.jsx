import { createContext, useState, useEffect, useContext } from "react"; 

const AuthContext = createContext(null);

export const AuthProvider = ({children})=> {

// *************************************** To receive Data from localstorage************************
    const [users, setUsers] = useState(()=>{
        const savedUsers = localStorage.getItem("user");
        if(savedUsers) {
            return JSON.parse(savedUsers);
        }
        return [];
    });

    const DEFAULT_AUTH_STATE = {
            isAuthenticated : false,
    }
    const [auth,setAuth] = useState(()=>{
           const savedAuth = localStorage.getItem("auth")
            if(savedAuth){
                return JSON.parse(savedAuth);
            }
            return DEFAULT_AUTH_STATE
    });




    useEffect(()=>{
            localStorage.setItem ("users",JSON.stringify(users))},[users]);

    useEffect (()=>{
            localStorage.setItem("auth", JSON.stringify(auth)),[auth]
    })
        
// ***************************************** Sign Up to keep data***********************************
    const [authError, setAuthError] = useState ("");
    const signUp = (name, email, password)=>{
            const existingUser = users.find((user)=> user.email === email);

            if(existingUser){
                setAuthError("User with this email already existis.");
                return;
            }
            setUsers((prev)=> [...prev, {name, email, password}])
            setAuth ((prev)=> ({...prev, name, email}))
    }



    return (
        <AuthContext.Provider value={{signUp, authError,auth}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>{
    return useContext(AuthContext)
}