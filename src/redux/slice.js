import { createSlice } from "@reduxjs/toolkit";
import { createToDO, deleteToDo, fetchToDo, redactToDo } from "API";

const toDoSlice = createSlice({
    name: "toDo",
    initialState: {
        list: [],
        showModal: false,
        showRedactModal: false,
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchToDo.pending, (state, action) => {
                console.log("pending");
            })
            .addCase(fetchToDo.fulfilled, (state, action) => {
                state.list = action.payload;
            })
            .addCase(fetchToDo.rejected, (state, action) => {
                console.log("rejected");
            })
            // ********************************************************
            .addCase(deleteToDo.pending, (state, action) => {
                console.log("pending modal");
            })
            .addCase(deleteToDo.fulfilled, (state, action) => {
                state.list = state.list.filter(
                    (item) => item.id !== action.payload.id
                );
            })
            .addCase(deleteToDo.rejected, (state, action) => {
                console.log("rejected modal");
            })
            // ********************************************************
            .addCase(createToDO.pending, (state, action) => {
                console.log("pending create");
            })
            .addCase(createToDO.fulfilled, (state, action) => {
                console.log("action", action);
                state.list.push(action.payload);
            })
            .addCase(createToDO.rejected, (state, action) => {
                console.log("rejected create");
            })
            // ********************************************************
            .addCase(redactToDo.pending, (state, action) => {
                console.log("pending redact");
            })
            .addCase(redactToDo.fulfilled, (state, action) => {
                const updatedIndex = state.list.findIndex(
                    (item) => item.id === action.payload.id
                );
                state.list[updatedIndex] = action.payload;
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
    },
});
export const { showModal, showReductModal } = toDoSlice.actions;
export const toDoReducer = toDoSlice.reducer;
