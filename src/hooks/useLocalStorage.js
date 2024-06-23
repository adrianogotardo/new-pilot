import { useState } from "react";

export default function useLocalStorage() {
    const userData = localStorage.getItem("userData");
    const [localStorageUserData, setLocalStorageUserData] = useState(JSON.parse(userData));

    function updateLocalStorageUserData(newUserData) {
        if (newUserData) {
            newUserData = JSON.stringify(newUserData);
            localStorage.setItem("userData", newUserData);
            setLocalStorageUserData(newUserData);
        } else {
            localStorage.removeItem("userData");
            setLocalStorageUserData(null);
        }
    };

    return [localStorageUserData, updateLocalStorageUserData];
}