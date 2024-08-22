import { jwtDecode } from "jwt-decode";

const validateToken = () => {
    const token = localStorage.getItem('access_token');
    console.log("token is ", token);
    if (!token) return false;

    try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        return decodedToken.exp > currentTime;
    } catch (error) {
        return false;
    }
};

export default validateToken;