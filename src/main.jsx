// React Import
import { StrictMode } from 'react';
// React Dom Import
import { createRoot } from 'react-dom/client';
// App Import
import App from './App.jsx'
// Styles Import
import './assets/css/index.css'
import 'react-toastify/dist/ReactToastify.css';
// Provider Import
import { AuthProvider } from './providers/AuthProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
)
