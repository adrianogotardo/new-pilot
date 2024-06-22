import { useState } from "react";

export default function useLocalStorage() {
    const userData = localStorage.getItem("userData");
    const [localStorageUserData, setLocalStorageUserData] = useState(null);

    function updateLocalStorageUserData(newUserData) {
        if(newUserData) {
            newUserData = JSON.stringify(newUserData);
            localStorage.setItem("userData", newUserData);
            setLocalStorageUserData(newUserData);
        } else {
            localStorage.removeItem("userData");
            setLocalStorageUserData(null);
        }
    };

    if(!userData) {
        return [ localStorageUserData, updateLocalStorageUserData];
    }
    
    setLocalStorageUserData(JSON.parse(userData));
    return [localStorageUserData, updateLocalStorageUserData];
}