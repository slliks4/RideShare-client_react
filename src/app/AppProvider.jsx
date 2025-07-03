// React Import
import { createContext, useContext, useState } from "react";

// App Context
const AppContext = createContext();

// App Provider
export const AppProvider = ({children}) => {
    const [userData, setUserData]= useState({
        theme: 'default',
        first_name: '',
        last_name: '',
    });

    return (
        <AppContext.Provider value={{ userData, setUserData }}>
            {children}  
        </AppContext.Provider>
    )
}

// Hook to check if app context is being used within scope
export const useAppContext = () => {
    const context = useContext(AppContext);

    if (!context){
        console.warn("app context used outside scope, please review code to fix");
        throw new Error("useAppContext must be used within an AppProvider");
    }

    return context;
}

