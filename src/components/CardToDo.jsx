import { Box, Button, ListItem, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { theme } from "Theme";

export const CardToDo = ({
    title,
    description,
    level,
    id,
    status,
    delToDo,
    redact,
}) => {
    const getColor = (level) => {
        switch (level) {
            case "easy":
                return theme.LVL.LEVEL_THREE;
            case "middle":
                return theme.LVL.LEVEL_TWO;
            case "hard":
                return theme.LVL.LEVEL_ONE;
            default:
                break;
        }
    };
    return (
        <ListItem
            sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "450px",
                padding: "10px",
                paddingBottom: "80px",
                border: `5px solid ${getColor(level)}`,
            }}
        >
            <Typography
                sx={{
                    textAlign: "center",
                    "&>*": {
                        textDecoration: "none",
                        color: "black",
                    },
                }}
                variant="h3"
            >
                <NavLink to={id}>{title}</NavLink>
            </Typography>
            <Typography variant="h5">{description}</Typography>
            <Typography variant="h3">Level: {level}</Typography>
            <Box
                sx={{
                    display: "flex",
                    gap: "20px",
                    position: "absolute",
                    bottom: "3px",
                }}
            >
                <Button
                    onClick={() => {
                        delToDo(id);
                    }}
                    sx={{
                        backgroundColor: "#ff0000",
                        color: "#fff",
                        fontSize: "30px",
                        "&:hover": {
                            color: "#ff0000",
                        },
                    }}
                >
                    Delete
                </Button>
                <Button
                    onClick={() => {
                        redact(id, null, { title, description, level });
                    }}
                    sx={{
                        backgroundColor: "#00d0ff",
                        color: "#fff",
                        fontSize: "30px",
                        "&:hover": {
                            color: "#00d0ff",
                        },
                    }}
                >
                    Redact
                </Button>
            </Box>
        </ListItem>
    );
};
