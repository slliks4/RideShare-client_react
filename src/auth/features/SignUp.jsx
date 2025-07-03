// React && React Router Import
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Global Hook Import
import useFetch from "../../global/hooks/useFetch";

// Custom Signup Hook
const useSignUp = () => {
    const [pending, setPending] = useState(false);
    const [modal, setModal] = useState({ open: false, data: null });
    const { post } = useFetch();

    async function submit(formData, skipCheck=false) {
        setPending(true);
        const resp = await post({ endpoints: "register/", data: { ...formData, skip_name_check: skipCheck} });
        setPending(false);
        console.log(resp)
        if (resp.status === 'warning') {
            setModal({ open: true, data: resp.suggested_recovery });
        } else{
            setModal({open:false, data:null})
            // Success Path
        }
        return resp;
    }

    return { pending, modal, submit };
}

// Pop Up Modal if Name Exists
const NameExistsModal = ({ data, onYes, onNo }) => {
    return (
        <div>
            <p>The name already exists. Is this you?</p>
            <p>email: {data.masked_email}</p>
            <p>phone number: {data.last4_phone}</p>
            <button onClick={onYes}>Yes, recover account</button>
            <button onClick={onNo}>No, create anyway</button>
        </div>
    );
}

// Default Function
export default function SignUpPage(){
    const { submit, pending, modal } = useSignUp();
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
            <h1>SignUp Page</h1>
            <button onClick={()=>submit(formData)} disabled={pending}> sign up</button>
            {modal.open && (
                <NameExistsModal
                    data={modal.data}
                    onYes={() => navigate('/auth/recover')}
                    onNo={() => { submit(formData, true); }}
                />
            )}
        </section>
    ) 
}
