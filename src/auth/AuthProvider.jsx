// React Import
import { createContext, useContext, useEffect, useReducer } from "react"

// Auth Context Create
const AuthContext = createContext();

// Auth Initial State 
const initialState = {
    isAuthenticated: undefined,
    token: null,
    permissions: [],
    roles:[],
}

// Auth Reducer for setting State
const AuthReducer = ( state, action ) => {
    switch(action.type){
        case 'LOGIN':
            return { isAuthenticated: true, ...action.payload }
        case 'LOGOUT':
            return { isAuthenticated: false, token: null, permissions: [], roles: [] }
        default:
            return { ...state }
    }
}

// Auth Provider that wraps arround app
export const AuthProvider = ({children}) => {
    // Set Auth State from auth Reducer
    const [ state, dispatch ] = useReducer(AuthReducer, initialState);
    console.log(state)

    // On mount, check if token exists and valid then LOGIN else LOGOUT
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch({ type: 'LOGIN', payload: { token, permissions: [], roles: ["admin"] } });
        } else {
            dispatch({ type: 'LOGOUT' });
        }
    }, []);


    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            { children } 
        </AuthContext.Provider>
    );
}

// Hook to ensure AuthContext is not used outside scope
export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context){
        console.warn("auth context used outside scope, please review code to fix");
        throw new Error("useAuthContext must be used within an AppProvider");
    }

    return context;
}
