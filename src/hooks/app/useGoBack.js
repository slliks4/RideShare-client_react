// React router Import
import { useNavigate } from "react-router-dom";

// Default Function
export default function useGoBack(){
    const navigate = useNavigate();

    // Navigate back once
    const goBack = () => {
        navigate(-1);
    }

    return { goBack }
}