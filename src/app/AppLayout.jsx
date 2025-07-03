// React router dom imports
import {  Outlet } from "react-router-dom";

// Context & Data & Provider
import { AppProvider } from "./AppProvider";

// Default App Funtion
export default function AppLayout(){
    return (
        <AppProvider>
            <h1>App Layout</h1>
            <Outlet />
        </AppProvider>
    )
}
