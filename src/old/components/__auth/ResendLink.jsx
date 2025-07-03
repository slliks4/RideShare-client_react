// React Import
import { useState } from 'react';

// React Router Dom Import
import { Form } from 'react-router-dom'


// Default Function
export default function ResendLink() {
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true);
  };


  return (
    <Form method='POST' onSubmit={handleSubmit} className='auth-form'>
      {/* Submit Button */}
      <button type="submit" disabled={ pending }> resend </button>
    </Form>
  )
}
