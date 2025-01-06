// Providers Import
import { useAuthContext } from "../../providers/AuthProvider";

// Default Function
export default function useFetch() {
    const baseUrl = 'https://rccgmzapp.jentriqmedia.com/api'; // Base URL
    const { state:{token:globalToken} } = useAuthContext(); // Global auth context

    // By default it uses gloablToken as Bearer if token is not specified when calling function
    const request = async ({method, endpoints, data = null, token=globalToken}) => {
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...(token && {Authorization:`Bearer ${token}`}),
            },
        };
        // Add data if any
        if (data) {
            options.body = JSON.stringify(data);
        }

        const response = await fetch(`${baseUrl}/${endpoints}`, options);

        if (!response.ok) {
            const errorData = await response.json();
            console.error(`status: ${errorData.status}, message: ${errorData.statusMessage}`);
            throw new Error(errorData.message || 'Something went wrong');
        }

        return response.json();
    };

    const post = ({ endpoints, data, token }) => request({method:'POST', endpoints, data, token});
    const get = ({ endpoints, token }) => request({method:'GET', endpoints, token});
    const put = ({ endpoints, data, token }) => request({method:'PUT', endpoints, data, token});
    const del = ({ endpoints, token }) => request({method:'DELETE', endpoints, token});

    return { post, get, put, del };
}
