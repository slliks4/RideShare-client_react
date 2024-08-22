// React Router Dom Import
import { Link, useParams } from 'react-router-dom';

// Components Import
import ResendLink from '../../components/__auth/ResendLink';

// Default Function
export default function VerificationPage() {
    const { email } = useParams();

    return (
        <div>
            <div className='mb-4'>
                <h1 className='capitalize font-bold'>verification</h1>
                <p className='py-2'>We have sent a link to this email: {email}. Follow the link to reset your password.</p>
            </div>
            <h3 className="capitalize">Resend link in: 5:49</h3>
            <ResendLink />
        </div>
    )
}
