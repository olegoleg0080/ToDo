import { createSlice } from "@reduxjs/toolkit";
import { createToDo, deleteToDo, fetchToDo, fetchToDoById, redactToDo } from "API";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";

const toDoSlice = createSlice({
    name: "toDo",
    initialState: {
        list: [],
        toDoById: {},
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
                if (action.payload.status === 404) {
                    state.error = 404;
                } else {
                    console.log("error:", action.payload.status);
                }
                console.log("rejected");
            })
            // ********************************************************
            .addCase(deleteToDo.pending, (state, action) => {
                console.log("pending modal");
                state.Loading = !state.Loading;
            })
            .addCase(deleteToDo.fulfilled, (state, action) => {
                console.log(typeof action.meta.arg);
                state.list = state.list.filter(
                    (item) => item._id !== action.meta.arg
                );
                state.Loading = !state.Loading;
            })
            .addCase(deleteToDo.rejected, (state, action) => {
                if (action.payload.status === 404) {
                    state.error = 404;
                } else {
                    console.log("error:", action.payload.status);
                }
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
                if (action.payload.status === 404) {
                    state.error = 404;
                } else {
                    console.log("error:", action.payload.status);
                }
                console.log("rejected create");
            })
            // ********************************************************
            .addCase(fetchToDoById.pending, (state, action) => {
                state.Loading = !state.Loading;
            })
            .addCase(fetchToDoById.fulfilled, (state, action) => {
                console.log("action.payload", action.payload);
                state.toDoById = action.payload;
                state.Loading = !state.Loading;
            })
            
            .addCase(fetchToDoById.rejected, (state, action) => {
                if (action.payload.status === 404) {
                    state.error = 404;
                } else {
                    console.log("error:", action.payload.status);
                }
                console.log("rejected create");
            })
            // ********************************************************
            .addCase(redactToDo.pending, (state, action) => {
                console.log("pending redact");
                state.Loading = !state.Loading;
            })
            .addCase(redactToDo.fulfilled, (state, action) => {
                const updatedIndex = state.list.findIndex(
                    (item) => item._id === action.payload._id
                );
                state.list[updatedIndex] = action.payload;
                state.Loading = !state.Loading;
            })
            .addCase(redactToDo.rejected, (state, action) => {
                if (action.payload.status === 404) {
                    state.error = 404;
                } else {
                    console.log("error:", action.payload.status);
                }
                console.log("rejected redact");
            }),
    reducers: {
        showModal: (state, action) => {
            state.showModal = !state.showModal;
        },
        showReductModal: (state, action) => {
            state.showRedactModal = !state.showRedactModal;
        },
        errorDel: (state, action) => {
            state.error = null;
        },
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
