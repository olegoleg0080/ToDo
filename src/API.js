import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65fdee5db2a18489b3859b8f.mockapi.io/task";

export const fetchToDo = createAsyncThunk(
    "toDo/getData",
    async (_, ThunkAPI) => {
        try {
            const res = await axios.get("/");
            return res.data;
        } catch (error) {
            return ThunkAPI.rejectWithValue("error", error);
        }
    }
);

export const deleteToDo = createAsyncThunk(
    "toDo/delToDo",
    async (toDoId, ThunkAPI) => {
        try {
            const res = await axios.delete(`/${toDoId}`);
            return res.data;
        } catch (error) {
            return ThunkAPI.rejectWithValue("error", error);
        }
    }
);

export const createToDO = createAsyncThunk(
    "toDo/createToDo",
    async (values, ThunkAPI) => {
        try {
            const res = await axios.post("/", values);
            return res.data;
        } catch (error) {
            return ThunkAPI.rejectWithValue("error", error);
        }
    }
);
export const redactToDo = createAsyncThunk(
    "toDo/redactToDo",
    async ({redactId, values}, ThunkAPI) => {
        try {
            console.log(redactId, values);
            const response = await axios.put(`/${redactId}`, values);
            return response.data;
        } catch (error) {
            return ThunkAPI.rejectWithValue("error", error);
        }
    }
);
