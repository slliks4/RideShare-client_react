// React Router Dom Import
import { Form } from 'react-router-dom'

// Default Function
export default function LoginForm({ pending, handleSubmit }) {
    return (
        <Form method='POST' onSubmit={handleSubmit} className='auth-form'>
            {/* Email */}
            <label htmlFor="email"> Email: </label>
            <input type="email" name="email" id="email" autoComplete='true' disabled={pending} required />

            {/* Password */}
            <label htmlFor="password"> Password: </label>
            <input type="password" name="password" id="password" autoComplete='true' disabled={pending} required />

            {/* Submit Button */}
            <button type="submit" disabled={pending}> log in </button>
        </Form>
    )
}
