// React Router Dom Import
import { Outlet } from "react-router-dom";

// Default Auth Layout
export default function AuthLayout(){
    return (
        <main>
            <h1>Auth layout </h1>
            <Outlet />
        </main>
    );
}

