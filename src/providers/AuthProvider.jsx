// React Import
import { createContext, useContext, useEffect, useReducer } from "react";
// Library Import
import { toast } from '../imports/library';

// Initial State
const initialState = {
    pending: true,
    isAuthenticated: undefined,
    token: undefined,
    user: undefined
};

// Auth Reducer
const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { pending:false, isAuthenticated:true, ...action.payload };
        case 'LOGOUT':
            return { pending:false, isAuthenticated:false, token:null, user:null};
    
        default:
            state;
    }
}

// Create Context
const AuthContext =  createContext();

// Auth Provider
export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    // Initialize token on mount
    useEffect(()=>{
        const init = async() =>{
            const token = localStorage.getItem('token');
            if (token){
                try {
                    // const userResponse =  await get({endpoints:'userProfile/getbyid', token }); // Get User
                    // Dummy data to stimulate response
                    const userResponse = {
                        data:{
                            email: "admin@gmail.com",
                            role: ['admin','driver','rider'],
                            providerTypeId: "",
                            id: 1
                        }
                    }
                    // Validate user data
                    if(userResponse?.data){
                        dispatch({ type:'LOGIN', payload:{token:token, user:{...userResponse.data}} }); // Login
                        localStorage.setItem('token', token); // Store token in local storage
                    }
                } catch (error) {
                    console.error(error.message);
                    toast.error(error.message);
                    throw Error(error.message);
                }
            }else{
                dispatch({ type:'LOGOUT' });
            }
        }
        init();
    },[]);

    return(
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

// Custom hook to prevent being used outside Scope
export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if(!context){
        throw new Error('Auth context used outside Scope');
    }

    return context;
}