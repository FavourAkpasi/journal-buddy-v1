import axios from "axios";
import { LoginType, RegisterType } from "../type/auth";
import { BASE_URL } from "../config/baseUrl";

const register = async (payload: RegisterType) => {
    const response = await axios.post(`${BASE_URL}/auth/register`, payload);
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
}

const login = async (payload: LoginType) => {
    const response = await axios.post(`${BASE_URL}/auth/login`, payload);
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
}

const updatePassword = async (payload: {email: string}) => {
    const response = await axios.put(`${BASE_URL}/auth/reset-password`, payload);
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
}

const authService = {
    register,
    login,
    updatePassword
}

export default authService;