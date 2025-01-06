// React Router Dom Import
import { Link } from "react-router-dom";
import LoginUser from "../../components/__auth/LoginUser";

// Default function
export default function LoginPage() {
  return (
    <div>
      <LoginUser />
      <h3 className="capitalize text-center">
        Having issues logging in ? 
        <Link to={'/auth/reset-password'} className="underline"> Reset Password</Link>
      </h3>
    </div>
  )
}
