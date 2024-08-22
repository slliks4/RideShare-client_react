// React router dom imports
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

// Library Import
import { ToastContainer } from "./imports/library";

// Services Import
import ProtectedRoute from "./services/ProtectedRoute";

// Layouts Import
import AppLayout from './layouts/AppLayout';
import AuthLayout from './layouts/AuthLayout';

// Pages Import
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/__protectedRoute/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from "./pages/__auth/LoginPage";
import RegisterPage from "./pages/__auth/RegisterPage";
import ResetPasswordPage from "./pages/__auth/ResetPasswordPage";
import RetrieveEmailPage from "./pages/__auth/RetrieveEmailPage";
import VerificationPage from "./pages/__auth/VerificationPage";

// Testing variable
const isAuthenticated = true;

// Default Funtion
function App() {
  const routes = createBrowserRouter([
    { 
      path:'/',
      errorElement: <ErrorPage error={'Broken Pipes'} />,
      children: [
        { 
          path: 'auth',
          element: !isAuthenticated ? <AuthLayout /> : <Navigate to={"/"} replace />, // checks if user is authenticated and redirects accordingly
          errorElement: <ErrorPage error={'Authentication error'} />,
          children: [
            { path: 'login', element: <LoginPage /> },
            { path: 'register', element: <RegisterPage /> },
            { path: 'reset-password', element: <ResetPasswordPage /> },
            { path: 'retrieve-email', element: <RetrieveEmailPage /> },
            { path: 'otp-verification/:email', element: <VerificationPage /> },
          ]
        },
        {
          path:'',
          element: <AppLayout />,
          errorElement: <ErrorPage error={'App Error'} />,
          children:[
            {
              element: <ProtectedRoute isAuthenticated={isAuthenticated} redirectPath="/auth/login" />,
              errorElement: <ErrorPage error={'Protected Route error'} />,
              children:[
                { index:true, element: <HomePage /> }
              ]
            },
          ]
        },
      ]
    },
    { path: 'protected-route-error', element: <ErrorPage error={'Protected route Redirect path undefined'} /> },
    { path:"*", element: <NotFoundPage /> }
  ])
  return (
    <>
      <RouterProvider router={routes} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
