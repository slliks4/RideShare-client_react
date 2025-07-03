// React Import
import { useState } from 'react';

// React Router Dom Import
import { Form } from 'react-router-dom'


// Default Function
export default function RegisterForm() {
    const [pending, setPending] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPending(true);

        const formData = new FormData(e.target);

        const data = {
            username: formData.get('username'),
            email: formData.get('email'),
        }

        console.log(data)
    };

    return (
        <Form method='POST' onSubmit={handleSubmit} className='auth-form'>
            {/* Username */}
            <label htmlFor="username"> username: </label>
            <input type="text" name="username" id="username" required />

            {/* Email */}
            <label htmlFor="email"> Email: </label>
            <input type="email" name="email" id="email" required />

            {/* Password */}
            <label htmlFor="password"> Password: </label>
            <input type="password" name="password" id="password" required/>

            {/* Confirm Password */}
            <label htmlFor="confirm-password"> Confirm Password: </label>
            <input type="password" name="confirm-password" id="confirm-password" required/>

            {/* Submit Button */}
            <button type="submit" disabled={ pending }> register </button>
        </Form>
    )
}
