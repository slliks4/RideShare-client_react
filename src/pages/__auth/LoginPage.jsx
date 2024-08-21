// React Router Dom Import
import { Link } from "react-router-dom";
import LoginForm from "../../components/__auth/LoginForm";

// Default function
export default function LoginPage() {
  return (
    <div>
      <LoginForm />
      <h3 className="capitalize text-center">Having issues logging in ? <Link to={'/auth/reset-password'} className="underline"> Reset Password</Link></h3>
    </div>
  )
}
