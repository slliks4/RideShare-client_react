// React Router Dom Import
import { Link } from 'react-router-dom';

// Components Import
import ResetPasswordForm from '../../components/__auth/ResetPasswordForm';

// Default Function
export default function ResetPasswordPage() {
  return (
    <div>
      <div className='mb-4'>
        <h1 className='capitalize font-bold'>Reset Passowrd</h1>
        <p className='py-2'>We will send you a one-time password. Please kindly enter your registered email below</p>
      </div>
      <ResetPasswordForm />
      <h3 className="capitalize text-center">Having issues ? <Link to={'/auth/retrieve-email'} className="underline"> Retrieve email</Link></h3>
    </div>
  )
}
