import { configureStore } from "@reduxjs/toolkit";
import { toDoPersistReducer } from "./slice";
import {
    persistStore,
    // persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import { authPersistReducer } from "./auth/sliceAccount";

export const store = configureStore({
    reducer: {
        toDo: toDoPersistReducer,
        auth: authPersistReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});
export const persistor = persistStore(store);
