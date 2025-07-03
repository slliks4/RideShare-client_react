import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { authRoutes } from "../auth/authRoutes";
import { appRoutes } from "../app/appRoutes";
import { useAuthContext } from "../auth/AuthProvider";

// Routes
const routes = createBrowserRouter([
    {
        path: '/',
        errorElement: <h1>This is the App Error element</h1>,
        element: <Outlet />,
        children:[
            ...appRoutes,
            ...authRoutes,
        ]
    },
    { path:'*', element: <h1>404 Page: oops looks like you got lost!</h1>}
])

export default function Route(){
    // Get auth state 
    const { state } = useAuthContext();
    
    // Stalls to get the proper Auth state before rendering routes
    if (state.isAuthenticated === undefined){
        return <h1> Loading ...</h1>
    }

    return(
        <RouterProvider router={routes} />
    )
}
