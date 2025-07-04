// React Import
import { useNavigate } from "react-router-dom";

// Hook Import
import useSignUp from "./useSignUp";

// Component Import
import NameExistsModal from "./NameExistsModal";

// Default Function
export default function SignUpPage(){
    const { pending, error, modal, submit } = useSignUp();
    const navigate = useNavigate();

    // Dummy Form data
    const formData = {
        // email: formData.get('email'),
        // password: formData.get('password')
        email: "john.doe34a@example.com",
        first_name: "John",
        last_name: "Doe",
        password: "Secret1234",
        confirm_password: "Secret1234"
    }

    return (
        <section>
            <h1>Sign Up</h1>

            {error && <p className="error">{error}</p>}

            <button onClick={() => submit(formData)} disabled={pending}>
            {pending ? 'Working…' : 'Sign up'}
            </button>

            {modal.open && (
                <NameExistsModal
                    data={modal.data}
                    onYes={() => navigate('/auth/recover')}
                    onNo={() => submit(formData, true)}
                />
            )}
        </section>
    );
}
