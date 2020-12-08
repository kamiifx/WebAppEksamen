import React, {createContext, useContext, useEffect, useState} from 'react';
import {getCurrent} from "../utiils/authService";

const authContext = createContext();
const {Provider} = authContext;
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(false)
    console.log(user);
    useEffect(() => {
        const fetchUserData = async () => {
            if (user === null){
                setLoading(true);
                try {
                    const {data} = await getCurrent();
                    console.log(data)
                    setUser(data)
                }catch (e) {
                    setUser(null);
                }
                setLoading(false)
            }
        };
        fetchUserData();
    },[user])
    return <Provider value={{isLoading:loading,isAdmin:user?.role === 'admin',isLoggedIn:!!user,user,setUser}}>{children}</Provider>
};

export const useAuthContext = () => useContext(authContext);
export default AuthProvider;
