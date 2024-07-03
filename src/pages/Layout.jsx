import { List, ListItemButton } from "@mui/material";
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
                {/* <ListItemButton>
                    <Link to={location.state ?? "/"}>Back</Link>
                </ListItemButton> */}
            </List>
            <Outlet />
        </>
    );
};
