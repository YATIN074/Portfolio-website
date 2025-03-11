import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [show,setShow] = useState('About');

    const value = {
        show,
        setShow
    };
    return <AppContext.Provider value = {value}>{children}</AppContext.Provider>
}
