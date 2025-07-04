// Pop Up Modal if Name Exists
export default function NameExistsModal ({ data, onYes, onNo }) {
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
