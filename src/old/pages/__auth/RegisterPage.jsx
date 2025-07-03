// React Router Dom Import
import { Link } from 'react-router-dom';

// Components Import
import RegisterForm from '../../components/__auth/RegisterForm';

// Default Function
export default function RegisterPage() {
  return (
    <div>
      <RegisterForm />
      <h3 className="capitalize text-center">Want to become a driver ? <Link to={''} className="underline">Register here</Link></h3>
    </div>
  )
}
