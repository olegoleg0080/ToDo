import { refreshUser } from "API";
import { GlobalStyle } from "GlobalStyle";
import { BoundingRoute } from "components/BoundingRoute";
import { Loader } from "components/Loader";
import { PrivateRoute } from "components/PrivateRoute";
import { CreateToDo } from "pages/CreateToDo";
import { Home } from "pages/Home";
import { Layout } from "pages/Layout";
import { LoginPage } from "pages/LoginPage";
import { RegistrationPage } from "pages/RegistrationPage";
import { ToDo } from "pages/ToDo";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { errorToDo, isloading } from "./redux/seectorsToDO";
import { errorAccount } from "./redux/auth/selectors";
import { Error404Page } from "pages/Error404Page";
import { ToDoDetal } from "pages/ToDoDetals";

export const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);
    const isLoading = useSelector(isloading);
    const errorAcaunt = useSelector(errorAccount);
    const errorToDos = useSelector(errorToDo); 
    
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route
                        path="login"
                        element={
                            <BoundingRoute
                                redirect="/toDos"
                                component={LoginPage}
                            />
                        }
                    />
                    <Route
                        path="register"
                        element={
                            <BoundingRoute
                                redirect="/toDos"
                                component={RegistrationPage}
                            />
                        }
                    />
                    <Route
                        path="createToDo"
                        element={
                            <PrivateRoute
                                redirect="/login"
                                component={CreateToDo}
                            />
                        }
                    />
                    <Route
                        path="ToDos"
                        element={
                            <PrivateRoute redirect="/login" component={ToDo} />
                        }
                    />
                    <Route
                            path="ToDos/:toDoId"
                            element={<ToDoDetal />}
                        />
                    <Route path="NotFaund" element={<Error404Page />} />
                    <Route path="*" element={<div>404!!!</div>} />
                </Route>
            </Routes>
            {isLoading && <Loader />}
            {(errorAcaunt || errorToDos) && <Navigate to={"/NotFaund"} />}
            <GlobalStyle />
        </>
    );
};
