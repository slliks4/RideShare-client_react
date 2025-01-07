// React Router Dom Imports
import { Outlet } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import useAuthentication from "../hooks/auth/useAuthentication";

// Default Function
export default function AdminLayout() {
  const { logout } = useAuthentication();
  return (
    <main>
      <h1>welocome admin</h1>
        <div>
          <NavLink to={'/'} replace>switch to rider</NavLink> || <NavLink to={'/driver'} replace>switch to driver</NavLink>
        </div>

        <button onClick={async()=> await logout()}>Logout</button>
      <Outlet />
    </main>
  )
}
