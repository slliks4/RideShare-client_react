// Routes Import
import { RoleProtectedRoute } from './routes';

// Default Function
const AdminRoutes = ({ user }) => ([
  {
    element : <RoleProtectedRoute allowedRoles={[1]} roles={user?.UserType ? user.UserType : []}/>,
    children:[
      { index:true, element: <h1>admin home page</h1> }
    ]
  }
]);

export default AdminRoutes;
