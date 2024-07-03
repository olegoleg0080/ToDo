import { List } from "@mui/material";
import { CardToDo } from "./CardToDo";

export const ListToDo = ({ list, delToDo, redact }) => {
    return (
            <List sx={{display: "flex", gap: "10px", flexWrap: "wrap"}}>
                {list.map((item) => (
                    <CardToDo
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        level={item.level}
                        id={item.id}
                        status={item.status}
                        delToDo={delToDo}
                        redact={redact}
                    />
                ))}
            </List>
    );
};
