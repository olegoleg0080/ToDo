import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { App } from "App";
import { theme } from "Theme";

export const rootModal = document.querySelector("#Vtoroj-Root");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    // <React.StrictMode>
    <ThemeProvider theme={theme}>
        <BrowserRouter basename="/olegoleg0080/ToDo">
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </ThemeProvider>
    // </React.StrictMode>
);
