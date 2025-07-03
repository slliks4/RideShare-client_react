// React Import
import { useState } from 'react';

// React Router Dom Import
import { Form } from 'react-router-dom'


// Default Function
export default function RetrieveEmailForm() {
    const [pending, setPending] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPending(true);

        const formData = new FormData(e.target);

        const data = {
            tel: formData.get('tel'),
        }

        console.log(data)
    };

    return (
        <Form method='POST' onSubmit={handleSubmit} className='auth-form'>
            {/* Username */}
            <label htmlFor="tel"> tel: </label>
            <input type='tel' name="tel" id="tel" required />

            {/* Submit Button */}
            <button type="submit" disabled={ pending }> confirm </button>
        </Form>
    )
}
