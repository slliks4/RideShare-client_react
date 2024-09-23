import getToken from "../services/apis/GET/getToken"
import decodeToken from "../services/providers/decodeToken";

export const MainContext = () =>{
    const { access_token, refresh_token } = getToken();

    const decoded = decodeToken(access_token);

    
}