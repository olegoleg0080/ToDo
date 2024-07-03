import { GlobalStyle } from "GlobalStyle";
import { CreateToDo } from "pages/CreateToDo";
import { Home } from "pages/Home";
import { Layout } from "pages/Layout";
import { ToDo } from "pages/ToDo";
import { Route, Routes } from "react-router-dom";

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="createToDo" element={<CreateToDo />} />
                    <Route path="ToDos" element={<ToDo />} />
                    {/* <Route path="ToDo/:ToDoId" element={<ToDoDetal />} /> */}
                    <Route path="*" element={<div>404!!!</div>} />
                </Route>
            </Routes>
            <GlobalStyle />
        </>
    );
};
