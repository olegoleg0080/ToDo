import { createSlice } from "@reduxjs/toolkit";
import { createToDo, deleteToDo, fetchToDo, redactToDo } from "API";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";

const toDoSlice = createSlice({
    name: "toDo",
    initialState: {
        list: [],
        showModal: false,
        showRedactModal: false,
        Loading: false,
        error: null,
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchToDo.pending, (state, action) => {
                console.log("pending");
                state.Loading = !state.Loading;
            })
            .addCase(fetchToDo.fulfilled, (state, action) => {
                state.list = action.payload;
                state.Loading = !state.Loading;
            })
            .addCase(fetchToDo.rejected, (state, action) => {
                console.log("rejected");
            })
            // ********************************************************
            .addCase(deleteToDo.pending, (state, action) => {
                console.log("pending modal");
                state.Loading = !state.Loading;
            })
            .addCase(deleteToDo.fulfilled, (state, action) => {
                state.list = state.list.filter(
                    (item) => item._id !== action.payload.id
                );
                state.Loading = !state.Loading;
            })
            .addCase(deleteToDo.rejected, (state, action) => {
                console.log("rejected modal");
            })
            // ********************************************************
            .addCase(createToDo.pending, (state, action) => {
                console.log("pending create");
                state.Loading = !state.Loading;
            })
            .addCase(createToDo.fulfilled, (state, action) => {
                console.log("action", action);
                state.list.push(action.payload);
                state.Loading = !state.Loading;
            })
            .addCase(createToDo.rejected, (state, action) => {
                console.log("rejected create");
            })
            // ********************************************************
            .addCase(redactToDo.pending, (state, action) => {
                console.log("pending redact");
                state.Loading = !state.Loading;
            })
            .addCase(redactToDo.fulfilled, (state, action) => {
                const updatedIndex = state.list.findIndex(
                    (item) => item._id === action.payload.id
                );
                state.list[updatedIndex] = action.payload;
                state.Loading = !state.Loading;
            })
            .addCase(redactToDo.rejected, (state, action) => {
                console.log("rejected redact");
            }),
    reducers: {
        showModal: (state, action) => {
            state.showModal = !state.showModal;
        },
        showReductModal: (state, action) => {
            state.showRedactModal = !state.showRedactModal;
        },
        errorDel: (state, action) =>{
            state.error = null;
        }
    },
});
export const { showModal, showReductModal, errorDel } = toDoSlice.actions;
export const toDoReducer = toDoSlice.reducer;

const toDoPersistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["list"],
};

export const toDoPersistReducer = persistReducer(
    toDoPersistConfig,
    toDoReducer
);
