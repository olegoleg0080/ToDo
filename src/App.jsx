import { GlobalStyle } from "GlobalStyle";
import { Loader } from "components/Loader";
import { CreateToDo } from "pages/CreateToDo";
import { Home } from "pages/Home";
import { Layout } from "pages/Layout";
import { ToDo } from "pages/ToDo";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

export const App = () => {
    const isLoading = useSelector((state) => state.Loading);
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
            {isLoading && <Loader />}
            <GlobalStyle />
        </>
    );
};
