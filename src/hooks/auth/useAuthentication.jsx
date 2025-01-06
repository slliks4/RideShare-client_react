// Providers Import
import { useAuthContext } from '../../providers/AuthProvider';
// Apis Import
import useFetch from '../api/useFetch';

// Default Function
export default function useAuthentication() {
    const { dispatch } = useAuthContext(); // Global Auth Context
    const { get, post } = useFetch(); // Fetch api 

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
                        role: ['admin','driver','rider'],
                        providerTypeId: "",
                        id: 1
                    }
                }
                // Validate user data
                if(userResponse?.data){
                    dispatch({ type:'LOGIN', payload:{token:tokenResponse.data.token, user:{...userResponse.data}} }); // Login
                    localStorage.setItem('token', tokenResponse.data.token); // Store token in local storage
                }
            }
        } catch (error) {
            throw Error (error);
        }
    }

    // Logout Function
    const logout = async () => {
        dispatch({ tpye: 'LOGOUT' });
        localStorage.removeItem('token');
    }

    return ({ logout, login });
}
