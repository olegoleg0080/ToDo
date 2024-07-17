import { Button, List, ListItemButton } from "@mui/material";
import { logOut } from "API";
import { useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
const styleBtn = {
    bgcolor: "while",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    "& > a": {
        textDecoration: "none",
        padding: "20px",
    },
};

export const Layout = () => {
    const dispatch = useDispatch();
    // let location = useLocation();
    return (
        <>
            <List sx={{ display: "inline-flex", flexDirection: "column" }}>
                <ListItemButton sx={styleBtn}>
                    <NavLink to="/createToDo">Create To Do</NavLink>
                </ListItemButton>
                <ListItemButton sx={styleBtn}>
                    <NavLink to="/ToDos">To Do List</NavLink>
                </ListItemButton>
                <ListItemButton sx={styleBtn}>
                    <NavLink to="/login">Login</NavLink>
                </ListItemButton>
                <ListItemButton sx={styleBtn}>
                    <NavLink to="/register">Register</NavLink>
                </ListItemButton>
                <ListItemButton>
                    <Button onClick={()=>{dispatch(logOut())}}>LogOut</Button>
                </ListItemButton>
                {/* <ListItemButton>
                    <Link to={location.state ?? "/"}>Back</Link>
                </ListItemButton> */}
            </List>
            <Outlet />
        </>
    );
};
