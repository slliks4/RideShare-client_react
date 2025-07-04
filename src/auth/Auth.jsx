/**
 * AuthContext.js
 *
 * Centralized authentication context for the application.
 * This file defines:
 *  - AuthProvider: wraps the app and provides auth state & actions
 *  - authReducer: manages login, logout, and token refresh
 *  - useAuth: hook for consuming auth data and methods
 *
 * Reasoning:
 *  - Readability: all auth-related logic (state, actions, side-effects)
 *    lives in one place with clear comments.
 *  - Scalability: actions can be extended (roles, permissions, MFA)
 *    without scattering code across modules.
 */

import React, { createContext, useReducer, useEffect, useState, useContext } from 'react';
import useFetch from "../global/hooks/useFetch";

// Initial authentication state
const initialState = {
    isAuthenticated: false,   // Tracks if user is logged in
    token: null,              // Access token for API calls
    permissions: [],          // Optional permission list
    roles: []                 // Optional role list
};

// Reducer: handles state transitions for login, refresh, and logout
function authReducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                isAuthenticated: true,
                token: action.payload.token,
                permissions: action.payload.permissions,
                roles: action.payload.roles
            };

        case 'REFRESH':
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload.token
            };

        case 'LOGOUT':
            return { ...initialState, isAuthenticated: false };

        default:
            return state;
    }
}

// Create the AuthContext
const AuthContext = createContext();

/**
    * AuthProvider
    * Wraps the app and provides auth state and actions
    */
export default function AuthProvider({ children }) {
    const { post } = useFetch();                // Generic fetch helper
    const [state, dispatch] = useReducer(authReducer, initialState);
    const [isLoading, setIsLoading] = useState(false);  // Tracks async status
    const [error, setError] = useState(null);           // Error message

    /**
        * login
        * - Sends credentials to '/token/'
        * - Dispatches LOGIN on success and saves refresh token
        * - Sets error on failure
        */
        async function login(credentials) {
            setIsLoading(true);
            setError(null);

            try {
                const resp = await post({ endpoints: 'token/', data: credentials });
                dispatch({
                    type: 'LOGIN',
                    payload: {
                        token: resp.access,
                        permissions: [],      // TODO: replace with actual response
                        roles: ['admin']      // TODO: replace with actual response
                    }
                });
                localStorage.setItem('refreshToken', resp.refresh);
                return resp.access;
            } catch (err) {
                setError(err.message || 'Login failed');
                throw err;
            } finally {
                setIsLoading(false);
            }
        }

    /**
        * logout
        * - Clears auth state and removes persisted token
        */
        function logout() {
            setIsLoading(true);
            dispatch({ type: 'LOGOUT' });
            localStorage.removeItem('refreshToken');
            setIsLoading(false);
        }

    /**
        * verifyOrRefreshToken
        * - Attempts to read a saved refresh token and obtain a new access token
        * - Dispatches REFRESH on success or LOGOUT on failure
        */
        async function verifyOrRefreshToken() {
            setIsLoading(true);
            setError(null);

            try {
                const refresh = localStorage.getItem('refreshToken');
                if (!refresh) throw new Error('No refresh token found');

                const resp = await post({
                    endpoints: 'token/refresh/',
                    data: { refresh }
                });

                // Set New Refresh and Access token
                dispatch({ type: 'REFRESH', payload: { token: resp.access } });
                localStorage.setItem('refreshToken', resp.refresh);

                return;
            } catch (err) {
                logout();
                setError(err.message || 'Session expired');
                throw err;
            } finally {
                setIsLoading(false);
            }
        }

    // On component mount: try to auto-login via refresh token
    useEffect(() => {
        verifyOrRefreshToken().catch(() => {
            /* handled in the function */
        });
    }, []);

    // Expose state and actions to children
    return (
        <AuthContext.Provider
            value={{
                    ...state,
                    isLoading,
                    error,
                    login,
                    logout,
                    verifyOrRefreshToken
            }}
            >
            {children}
        </AuthContext.Provider>
    );
}

/**
* useAuth
* Hook for consuming auth context
*/
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
