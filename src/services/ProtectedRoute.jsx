// React Router Dom Import
import { Navigate, Outlet } from 'react-router-dom';

// Library Import
import { PropTypes } from '../imports/library';

// Default Function
export default function ProtectedRoute({ isAuthenticated = false, redirectPath = "protected-route-error" }) {
  return (
    isAuthenticated ? <Outlet /> : <Navigate to={redirectPath} replace />
  )
}

// Type Checking
ProtectedRoute.propTypes = {
    isAuthenticated: PropTypes.bool,
    redirectPath: PropTypes.string,
};