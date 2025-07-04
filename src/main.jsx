// This file wraps App with Global styling, context, and Providers


// Strict Mode (it might sometimes log twice in DOM)
import { StrictMode } from 'react';

// React Dom Import
import { createRoot } from 'react-dom/client';

// React Tostify
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "./global/imports/library";

// Providers || Hooks || Components
import AuthProvider from './auth/Auth';
import Route from './global/Route';


// Create Root and attach to index.html
// createRoot(document.getElementById('root')).render(
//     <StrictMode>
//         <ToastContainer
//             position="top-right"
//             autoClose={1000}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="light"
//         />
//         <AuthProvider>
//             <Route />    
//         </AuthProvider>
//     </StrictMode>
// )
createRoot(document.getElementById('root')).render(
    <>
        <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
        <AuthProvider>
            <Route />    
        </AuthProvider>
    </>
)
