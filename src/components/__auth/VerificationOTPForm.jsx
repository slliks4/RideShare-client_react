// React Import
import { useState } from 'react';

// React Router Dom Import
import { Form } from 'react-router-dom'


// Default Function
export default function VerificationOTPForm() {
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true);

    const formData = new FormData(e.target);

    const data = {
      otp: formData.get('otp'),
    }

    console.log(data)
  };

  return (
    <Form method='POST' onSubmit={handleSubmit} className='auth-form'>
      {/* Username */}
      <label htmlFor="otp"> OTP: </label>
      <input type="text" name="otp" id="otp" required />

      {/* Submit Button */}
      <button type="submit" disabled={ pending }> confirm </button>
    </Form>
  )
}
