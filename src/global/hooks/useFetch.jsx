// Providers Import

import { useAuthContext } from "../../auth/AuthProvider";

// Default Function
export default function useFetch() {
    const baseUrl = 'http://127.0.0.1:8000'; // Base URL

    // By default it assumes token is null except given
    const request = async ({ method, endpoints, data = null, token=null}) => {
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
        const json= await response.json();

        if (!response.ok) {
            throw Error(json.message || 'Something went wrong');
        }

        return json;
    };

    const post = ({ endpoints, data, token }) => request({method:'POST', endpoints, data, token});
    const get = ({ endpoints, token }) => request({method:'GET', endpoints, token});
    const put = ({ endpoints, data, token }) => request({method:'PUT', endpoints, data, token});
    const del = ({ endpoints, token }) => request({method:'DELETE', endpoints, token});

    return { post, get, put, del };
}
