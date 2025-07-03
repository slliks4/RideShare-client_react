// React Router Dom Import
import { Navigate, Outlet } from 'react-router-dom';
// Pages Import
import NotFoundPage from '../pages/NotFoundPage';
// Routes Import
import AuthRoutes from "./AuthRoutes";
import AdminRoutes from './AdminRoutes';
import AppRoutes from './AppRoutes';
// Providers Import
import { useAuthContext } from '../providers/AuthProvider';
import AuthLayout from '../layouts/AuthLayout';
// Component Import
import ErrorComponent from '../components/ErrorComponent';
// Layout Import
import AppLayout from '../layouts/AppLayout';
import AdminLayout from '../layouts/AdminLayout';

// Protected Route Component
export const ProtectedRoute = ({ isAuthenticated, redirectTo, children }) => {
    return isAuthenticated ? children : <Navigate to={redirectTo} replace />;
};

// Public Route Component
export const PublicRoute = ({ isAuthenticated, redirectTo, children }) => {
    return !isAuthenticated ? children : <Navigate to={redirectTo} replace />;
};

// Role Protected Route Component
export const RoleProtectedRoute = ({ roles, allowedRoles }) => {
    const hasAccess = allowedRoles.some(role => roles.includes(role));

    return hasAccess ? <Outlet /> : <div>Permission denied</div>;
};

// Routing system
export const createRoutes = () => {
    // Global States 
    const { state:{isAuthenticated, pending, user} } = useAuthContext();
    
    if (pending){
        return [
            { path:'*', element: <div>Pending</div> }
        ]
    }

    console.log(`isAuthenticated: ${isAuthenticated}, pending:${pending}`);

    return [
        {
            path: '/',
            element: <Outlet />,
            children:[
                {   // App Routing Logic
                    path: '/',
                    element: <ProtectedRoute 
                        children={<AppLayout />}
                        isAuthenticated={isAuthenticated}
                        redirectTo={'/auth/login'}
                    />,
                    errorElement: <ErrorComponent message={"App Routing error"} />,
                    children: AppRoutes()
                },
                {   // Auth Routing Logic
                    path: 'auth',
                    element: <PublicRoute 
                        children={<AuthLayout />}
                        isAuthenticated={isAuthenticated}
                        redirectTo={'/'}
                    />,
                    errorElement: <ErrorComponent message={"Auth Routing error"} />,
                    children: AuthRoutes()
                },
                {   // Admin Routing Logic
                    path:'admin',
                    element: <ProtectedRoute
                        children={<AdminLayout />}
                        isAuthenticated={isAuthenticated}
                        redirectTo={'/auth/login'}
                    />,
                    errorElement: <ErrorComponent message={"Admin Routing error"} />,
                    children: AdminRoutes({ user })
                }
            ]
        },
        { path:'*', element:<NotFoundPage /> }
    ];
}
