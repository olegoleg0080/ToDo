import { Button, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";

export const CreateToDoForm = ({ onAdd }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [level, setLevel] = useState("easy");
    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ title, description, level });
        setTitle("");
        setDescription("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                id="title"
                label="Title"
                variant="outlined"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <TextField
                id="description"
                label="Description"
                variant="outlined"
                multiline
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <Select
                variant="filled"
                labelId="level-label"
                id="level"
                label="level"
                value={level}
                onChange={(event) => setLevel(event.target.value)}
            >
                <MenuItem value="easy">easy</MenuItem>
                <MenuItem value="normal">normal</MenuItem>
                <MenuItem value="hard">hard</MenuItem>
            </Select>
            <Button type="submit" variant="contained">
                Отправить
            </Button>
        </form>
    );
};
