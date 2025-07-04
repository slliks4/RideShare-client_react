// TODO: Convert to lazy before production
// Route guard Import

import { ProtectAuthRoute } from "../global/RouteGuard";
import AuthLayout from "./AuthLayout";
import SignUpPage from "./features/signup/SignUpPage";

// Features Import
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
            // { index:true, element: <h1>Loging page</h1> },
            { index:true , element: <SignUpPage /> },
        ]
    }
]

