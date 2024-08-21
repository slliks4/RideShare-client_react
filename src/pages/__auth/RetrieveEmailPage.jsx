// React Router Dom Import
import { Link } from 'react-router-dom';
import RetrieveEmailForm from '../../components/__auth/RetrieveEmailForm';

// Default Function
export default function RetrieveEmailPage() {
  return (
    <div>
      <div className='mb-4'>
        <h1 className='capitalize font-bold'>Retrieve Email</h1>
        <p className='py-2'>We will send your email address to your registered phone number. Please enter your registered phone number below.</p>
      </div>
      <RetrieveEmailForm />
      <h3 className="capitalize text-center">Still having an issue ? <Link to={''} className="underline">Contact us</Link></h3>
    </div>
  )
}
