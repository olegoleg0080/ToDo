import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { App } from "App";
import { theme } from "Theme";
import { PersistGate } from "redux-persist/integration/react";

export const rootModal = document.querySelector("#Vtoroj-Root");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    // <React.StrictMode>
    <ThemeProvider theme={theme}>
        <BrowserRouter basename="ToDo">
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </ThemeProvider>
    // </React.StrictMode>
);
