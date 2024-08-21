// React Import
import { useState } from 'react';

// React Router Dom Import
import { Form } from 'react-router-dom'

// Default Function
export default function LoginForm() {
    const [pending, setPending] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPending(true);

        const formData = new FormData(e.target);

        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        }

        console.log(data)
    };

    return (
        <Form method='POST' onSubmit={handleSubmit} className='auth-form'>
            {/* Email */}
            <label htmlFor="email"> Email: </label>
            <input type="email" name="email" id="email" required />

            {/* Password */}
            <label htmlFor="password"> Password: </label>
            <input type="password" name="password" id="password" required />

            {/* Submit Button */}
            <button type="submit" disabled={pending}> log in </button>
        </Form>
    )
}
