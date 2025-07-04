// React Import
import { useState } from "react";

// Global Hook Import
import useFetch from "../../../global/hooks/useFetch";
import { useAuth } from "../../Auth";

// Custom Signup Hook
export default function useSignUp() {
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);
    const [modal, setModal] = useState({ open: false, data: null });

    const { post } = useFetch();
    const { login } = useAuth();

    /**
        * submit
        * - If the backend warns “name exists”, show modal and stop
        * - Otherwise attempt to log the user in (login() will throw on failure)
        */
        async function submit(formData, skipCheck = false) {
            setPending(true);
            setError(null);

            try {
                const resp = await post({
                    endpoints: 'register/',
                    data: { ...formData, skip_name_check: skipCheck }
                });

                // If we get a “name exists” warning and the user hasn't already chosen “create anyway”…
                if (resp.status === 'warning' && !skipCheck) {
                    setModal({ open: true, data: resp.suggested_recovery });
                    return resp;
                }

                // Otherwise proceed straight to login
                await login({
                    email: formData.email,
                    password: formData.password
                });

                console.log('logged in successfully');
                return resp;
            } catch (err) {
                setError(err.message || 'Sign-up failed');
                throw err;
            } finally {
                setPending(false);
            }
        }

    return {
        pending,    // boolean for disabling UI
        error,      // string|null for any signup/login error
        modal,      // { open, data } for name-exists flow
        submit
    };
}
