// Route guard Import
import { ProtectAuthRoute } from "../global/RouteGuard";

// Component & Layout Import 
// TODO: Convert to lazy before production
import AuthLayout from "./AuthLayout";
import SignUpPage from "./features/SignUp";

// Auth Routes
export const authRoutes= [
    {
        path: 'auth',
        errorElement: <h1>Auth Error Element Page</h1>,
        element: (
            <ProtectAuthRoute>
                <AuthLayout />
            </ProtectAuthRoute>
        ),
        children: [
            { index:true, element: <h1>Loging page</h1> },
            { path:'signup', element: <SignUpPage /> },
        ]
    }
]

