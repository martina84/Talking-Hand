import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export function UserContextProvider({ children }) {
    const [userToken, setUserToken] = useState(localStorage.getItem('userToken'));

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        if (token) {
            setUserToken(token);
        }
    }, []);

    const login = (token) => {
        localStorage.setItem('userToken', token);
        setUserToken(token);
    };

    const logout = () => {
        localStorage.removeItem('userToken');
        setUserToken(null);
    };

    return (
        <UserContext.Provider value={{ userToken, setUserToken, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}
