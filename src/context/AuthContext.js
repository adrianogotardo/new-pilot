import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [ userData, setUserData ] = useLocalStorage();

    function logout() {
        setUserData();
        //window.location.reload(); // testar se é necessario
    }

    return <AuthContext.Provider value={ { userData, setUserData, logout } }>
        { children }
    </AuthContext.Provider>
};

export { AuthContext, AuthContextProvider }