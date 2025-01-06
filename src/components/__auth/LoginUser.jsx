// Library Import
import { toast } from '../../imports/library';
// React Import
import { useState } from 'react';
// Hooks Import
import useAuthentication from '../../hooks/auth/useAuthentication';
// Component Import
import LoginForm from './LoginForm';

// Default Function
export default function LoginUser() {
    const [pending, setPending] = useState(false);
    const { login } = useAuthentication();

    // Handle Submit Function
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent refreshing on submit
        setPending(true); // Prevents multiple request and reentering form data while sending

        // initialize form data
        const formData = new FormData(e.target);

        const loginFormData = {
            email: formData.get('email'),
            password: formData.get('password')
        }

        try {
            // Calls the login function
            await login({data:loginFormData});
            setPending(false);
            toast.success('Login successful');
        } catch (error) {
            setPending(false);
            toast.error(error.message);
        }
    };

    return (
        <LoginForm pending={pending} handleSubmit={handleSubmit} />
    )
}
