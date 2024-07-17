import { createSlice } from "@reduxjs/toolkit";
import { login, logOut, refreshUser, register } from "API";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const initialState = {
    user: {
        email: "",
        username: "",
    },
    token: null,
    isLogged: false,
    isRefresh: false,
    error: null,
};
const authtPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["token"],
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) =>
        builder
            .addCase(refreshUser.pending, (state, action) => {
                state.isRefresh = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                console.log("ref action", action);
                state.user = action.payload.user;
                state.isLogged = true;

                state.isRefresh = false;
            })
            .addCase(refreshUser.rejected, (state, action) => {
                state.isRefresh = true;
            })

            .addCase(register.pending, (state, action) => {
                console.log(action);

                state.isRefresh = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLogged = true;
                state.isRefresh = false;
                console.log("action", action);
                state.user = action.payload.users;
                state.token = action.payload.token;
            })
            .addCase(register.rejected, (state, action) => {
                state.isRefresh = false;
                state.isLogged = false;
            })

            .addCase(login.pending, (state, action) => {
                state.isLogged = false;
                state.isRefresh = true;
                console.log(action);
            })
            .addCase(login.fulfilled, (state, action) => {
                // state.user = initialState.user;
                state.isLogged = true;
                state.isRefresh = false;
                state.token = action.payload.token; 
            })
            .addCase(login.rejected, (state, action) => {
                if (action.payload.status === 404) {
                    state.error = 404;
                }
                else{
                    console.log("error:", action.payload.status);
                }
            })

            .addCase(logOut.fulfilled, (state, action) => {
                state.user = initialState.user;
                state.isLogged = false;
                state.token = null;
            }),
        reducers: {
            errorAcDel: (state, action) =>{
                state.error = null;
            },
        }
});
// export const {  } = authSlice.actions;
export const { errorAcDel } = authSlice.actions;
export const authReducer = authSlice.reducer;
export const authPersistReducer = persistReducer(
    authtPersistConfig,
    authReducer
);
