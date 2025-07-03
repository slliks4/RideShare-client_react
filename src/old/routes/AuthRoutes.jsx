// Pages Import
import LoginPage from '../pages/__auth/LoginPage';
import RegisterPage from '../pages/__auth/RegisterPage';
import ResetPasswordPage from '../pages/__auth/ResetPasswordPage';
import RetrieveEmailPage from '../pages/__auth/RetrieveEmailPage';
import VerificationPage from '../pages/__auth/VerificationPage';

// Default Function
const AuthRoutes = () => ([
  { index: true, element: <LoginPage /> },
  { path: 'login', element: <LoginPage /> },
  { path: "register", element: <RegisterPage /> },
  { path: "reset-password", element: <ResetPasswordPage /> },
  { path: "retrieve-email", element: <RetrieveEmailPage /> },
  { path: "otp-verification/:email", element: <VerificationPage /> },
]);

export default AuthRoutes;