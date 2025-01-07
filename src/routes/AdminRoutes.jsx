// Routes Import
import { RoleProtectedRoute } from './routes';

// Default Function
const AdminRoutes = ({ user }) => ([
  {
    element : <RoleProtectedRoute allowedRoles={['admin']} roles={user?.role ? user.role : []}/>,
    children:[
      { index:true, element: <h1>admin home page</h1> }
    ]
  }
]);

export default AdminRoutes;
