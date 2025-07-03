// src/components/RouteGuard.jsx
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../auth/AuthProvider";

/**
 * RouteGuard
 * 
 * Props:
 * - allowedRoles: array of roles allowed to access this route
 * - allowedPermissions: array of permissions allowed to access this route (optional)
 * - fallback: React element to render instead of navigating away (optional)
 * - redirect: URL to navigate if access is denied (default: "/not-authorized")
 * - children: component(s) to render if access is granted
 */


export default function RouteGuard({
    allowedRoles = [],
    allowedPermissions = [],
    fallback = null,
    redirect = "/not-authorized",
    children
}) {
    const { state } = useAuthContext();
    const roles = state.roles ?? [];
    const permissions = state.permissions ?? [];
    const isAuthenticated = state.isAuthenticated;

    // Determine if user has allowed role
    const hasRoleAccess = allowedRoles.length === 0 || allowedRoles.some(role => roles.includes(role));

    // Determine if user has allowed permission
    const hasPermissionAccess =
        allowedPermissions.length === 0 ||
        allowedPermissions.some(permission => permissions.includes(permission));

    // Auth guard
    if (!isAuthenticated) {
        return <Navigate to="/auth" replace />;
    }

    // Role/permission guard
    if (!hasRoleAccess || !hasPermissionAccess) {
        // If fallback is provided, render it instead of navigating
        if (fallback) {
            return fallback;
        }

        // Otherwise, redirect to the specified URL
        return <Navigate to={redirect} replace />;
    }

    // If allowed, render the child component(s)
    return children;
}

// Guard Auth Route From Authenticated users
export const ProtectAuthRoute = ({children}) => {
    const { state:authState } = useAuthContext();

    if(authState.isAuthenticated){
        return <Navigate to={'/' } replace />
    }

    return children;
}
