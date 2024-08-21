// React Router Dom Import
import { Link, useParams } from 'react-router-dom';

// Components Import
import VerificationOTPForm from '../../components/__auth/VerificationOTPForm';

// Default Function
export default function VerificationPage() {
    const { email } = useParams();

    return (
        <div>
            <div className='mb-4'>
                <h1 className='capitalize font-bold'>OTP verification</h1>
                <p className='py-2'>We have sent you a one-time password to this email: {email}</p>
            </div>
            <VerificationOTPForm />
            <h3 className="capitalize text-center"> Did not receive OTP ? <Link to={''} className="underline"> resend OTP </Link></h3>
        </div>
    )
}
