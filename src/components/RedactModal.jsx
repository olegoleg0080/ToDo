import {
    Box,
    Button,
    MenuItem,
    Modal,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { isshowRedactModal } from "../redux/seectorsToDO";

export const RedactModal = ({ redactToDo     }) => {
    const isShowRedactModal = useSelector(isshowRedactModal);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [level, setLevel] = useState("easy");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ title, description, level });
        redactToDo("0",{ title, description, level });
    };

    return (
        <Modal
            open={isShowRedactModal}
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    transform: " translateY(-100%)",
                    bgcolor: "rgba(255, 255, 255, 0.8)",
                    padding: "40px",
                }}
            >
                <Typography variant="h3">Redact mod</Typography>
                <Box>
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
                            onChange={(event) =>
                                setDescription(event.target.value)
                            }
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
                            <MenuItem value="middle">middle</MenuItem>
                            <MenuItem value="hard">hard</MenuItem>
                        </Select>
                        <Button type="submit" variant="contained">
                            Отправить
                        </Button>
                    </form>
                </Box>
            </Box>
        </Modal>
    );
};
