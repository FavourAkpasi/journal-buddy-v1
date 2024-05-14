import axios from "axios";
import { BASE_URL } from "../config/baseUrl";
import { config } from "../config/headers";
import { AddEntryType, UpdateEntryType } from "../type/entry";

const getAllEntries = async (token: string) => {
    const response = await axios.get(`${BASE_URL}/entry/all`, config(token));
    return response.data;
}

const addEntry = async (payload: AddEntryType, token: string) => {
    const response = await axios.post(`${BASE_URL}/entry/new`, payload, config(token));
    return response.data;
}

const updateEntry = async (payload: UpdateEntryType, token: string) => {
    const response = await axios.put(`${BASE_URL}/update/${payload.id}`, payload, config(token));
    return response.data;
}

const deleteEntry = async (id: string, token: string) => {
    const response = await axios.delete(`${BASE_URL}/entry/delete/${id}`, config(token));
    return response.data;
}

const entryServices = {
    getAllEntries,
    addEntry,
    updateEntry,
    deleteEntry
}

export default entryServices;