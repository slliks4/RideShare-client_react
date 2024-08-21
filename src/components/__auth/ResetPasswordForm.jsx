// React Import
import { useState } from 'react';

// React Router Dom Import
import { Form, useNavigate } from 'react-router-dom'


// Default Function
export default function ResetPasswordForm() {
    const [pending, setPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPending(true)

        const formData = new FormData(e.target);

        const data = {
            email: formData.get('email'),
        }

        console.log(data);
        setPending(false);
        navigate(`/auth/otp-verification/${data.email}`, { state: { fromEmailForm: true } });
    };

    return (
        <Form method='POST' onSubmit={handleSubmit} className='auth-form'>
            {/* Username */}
            <label htmlFor="email"> email: </label>
            <input type="email" name="email" id="email" required />

            {/* Submit Button */}
            <button type="submit" disabled={ pending }> confirm </button>
        </Form>
    )
}
