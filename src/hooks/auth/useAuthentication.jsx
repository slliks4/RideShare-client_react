// Providers Import
import { replace, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../providers/AuthProvider';
// Apis Import
import useFetch from '../api/useFetch';

// Default Function
export default function useAuthentication() {
    const { dispatch } = useAuthContext(); // Global Auth Context
    const { get, post } = useFetch(); // Fetch api 
    const navigate = useNavigate();

    // Login Function
    const login = async ({ data }) => {
        try {
            const tokenResponse = await post({data, endpoints:'auth/login'});
            if (tokenResponse?.data){
                // const userResponse =  await get({endpoints:'userProfile/getbyid', token:tokenResponse.data.token}); // Get User

                // Dummy data to stimulate response
                const userResponse = {
                    data:{
                        email: "admin@gmail.com",
                        role: ['admin'],
                        providerTypeId: "",
                        id: 1
                    }
                }
                // Validate user data
                if(userResponse?.data){
                    dispatch({ type:'LOGIN', payload:{token:tokenResponse.data.token, user:{...userResponse.data}} }); // Login
                    localStorage.setItem('token', tokenResponse.data.token); // Store token in local storage

                    // Reroute based on user role
                    onLoginReroute(userResponse.data.role)
                }
            }
        } catch (error) {
            throw Error (error);
        }
    }

    // Logout Function
    const logout = async () => {
        dispatch({ type: 'LOGOUT' }); // Logout
        localStorage.removeItem('token'); // Remove token after state update
    }

    const onLoginReroute = (role) =>{
        // Navigate to Pages based on user Role
        if(role.includes('admin')){
            navigate('/admin', { replace: true });
        }
        if (role.includes('driver') && !role.includes('admin')){
            navigate('/driver', { replace: true });
        }
    }

    return ({ logout, login });
}
