import axios from "axios";
import { MessageType } from "../type/message";
import { BASE_URL } from "../config/baseUrl";

const getAllMessages = async (entryId: string) => {
    const response = await axios.get(`${BASE_URL}/messages/${entryId}`);    
    return response.data;
}

const addMessage = async (payload: MessageType) => {
    const response = await axios.post(`${BASE_URL}/messages`, payload);
    return response.data;
}

const messageServices = {
    getAllMessages,
    addMessage
}

export default messageServices;