import { Button, ListItem, Typography } from "@mui/material";
import { theme } from "Theme";

export const CardToDo = ({
    key,
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
            case "normal":
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
            key={key}
        >
            <Typography sx={{ textAlign: "center" }} variant="h3" to={id}>
                {title}
            </Typography>
            <Typography variant="h5">{description}</Typography>
            <Typography variant="h3">Level: {level}</Typography>
            <Button onClick={()=>{delToDo(id)}} sx={{backgroundColor: "#ff0000",position:"absolute",bottom: "3px", color: "#fff", fontSize: "30px", "&:hover":{
                color: "#ff0000"
            }} }>Delete</Button>
            <Button onClick={()=>{redact(id, null, {title, description, level})}}>Redact</Button>
        </ListItem>
    );
};
