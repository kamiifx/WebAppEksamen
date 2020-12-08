import React, {createContext, useContext, useEffect, useState} from 'react';
import {getCurrent} from "../utiils/authService";

const authContex = createContext();
const {Provider} = authContex;
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(false)
    console.log(user);
    useEffect(() => {
        const fetchUserData = async () => {
            if (user === null){
                setLoading(true);
                const {data} = await getCurrent();
                if (data?.success){
                    const currentUser = data.data;
                    setUser(currentUser)
                }else {
                    setUser(null);
                }
                setLoading(false)
            }
        };
        fetchUserData();
    },[user])
    return <Provider value={{isLoading:loading,isAdmin:user?.role === 'admin',isLoggedIn:!!user,user,setUser}}>{children}</Provider>
};

export const useAuthContex = () => useContext(authContex);
export default AuthProvider;
