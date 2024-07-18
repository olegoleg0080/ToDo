import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://user-api-jqba.onrender.com";

export const fetchToDo = createAsyncThunk(
    "toDo/getData",
    async (_, ThunkAPI) => {
        try {
            const res = await axios.get("/todos");
            return res.data;
        } catch (error) {
            return ThunkAPI.rejectWithValue("error", error);
        }
    }
);

export const fetchToDoById = createAsyncThunk(
    "toDo/getDataById",
    async (toDoId, ThunkAPI) => {
        try {
            const res = await axios.get(`/todos/${toDoId}`);
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
            const res = await axios.delete(`/todos/${toDoId}`);
            return res.data;
        } catch (error) {
            // error.response.status
            return ThunkAPI.rejectWithValue("error", error);
        }
    }
);

export const createToDo = createAsyncThunk(
    "toDo/createToDo",
    async (values, ThunkAPI) => {
        try {
            console.log(values);
            const res = await axios.post("/todos", values);
            return res.data;
        } catch (error) {
            console.log("error:", error);
            return ThunkAPI.rejectWithValue("error", error);
        }
    }
);
export const redactToDo = createAsyncThunk(
    "toDo/redactToDo",
    async ({ redactId, values }, ThunkAPI) => {
        try {
            console.log(redactId, values);
            const response = await axios.put(`/todos/${redactId}`, values);
            return response.data;
        } catch (error) {
            // error.response.status
            return ThunkAPI.rejectWithValue("error", error);
        }
    }
);

const setAuthHeader = (token) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () =>
    (axios.defaults.headers.Authorization = "");
export const register = createAsyncThunk(
    "auth/register",
    async (arg, thunkAPI) => {
        try {
            console.log("arg", arg);
            const res = await axios.post("/users/signup", arg);
            console.log("res", res);
            setAuthHeader(res.data.token);
            return res.data;
        } catch (error) {
            // error.response.status
            return thunkAPI.rejectWithValue(error.massage);
        }
    }
);

export const login = createAsyncThunk("auth/login", async (arg, thunkAPI) => {
    try {
        console.log(arg);
        const res = await axios.post("/users/signin", arg);
        setAuthHeader(res.data.token);
        console.log(res);
        return res.data;
    } catch (error) {
        console.log(error.response.status);
        return thunkAPI.rejectWithValue({
            message: error.response?.data?.message || "Login failed",
            status: error.response?.status || 500,
        });
    }
});

export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistToken = state.auth.token;
        console.log(persistToken);

        if (persistToken === null) {
            return thunkAPI.rejectWithValue("Unable to fetch user");
        }
        try {
            setAuthHeader(persistToken);
            const res = await axios.get("/users/current");
            return res.data;
        } catch (error) {
            // error.response.status
            return thunkAPI.rejectWithValue(error.massage);
        }
    }
);

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;

    if (persistToken === null) {
        return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    try {
        setAuthHeader(persistToken);
        const res = await axios.get("/users/current");
        return res.data;
    } catch (error) {
        // error.response.status
        return thunkAPI.rejectWithValue(error.massage);
    }
});
