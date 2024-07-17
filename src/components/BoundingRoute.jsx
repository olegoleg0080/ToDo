import { useSelector } from "react-redux";
import { isLogged } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";
export const BoundingRoute = ({ redirect, component: Component }) => {
    const logged = useSelector(isLogged);
    return !logged ? <Component /> : <Navigate to={redirect} />;
};
