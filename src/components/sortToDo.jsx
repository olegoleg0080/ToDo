import { Box, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const SortToDo = () => {
    const [title, setTitle] = useState("");
    const [level, setLevel] = useState("all");

    const [params, setParams] = useSearchParams();
    const filterLevel = params.get("filterLevel") ?? "all";
    const filterText = params.get("filterText") ?? "";

    const hendleSortLevel = (e) => {
        setParams({ filterLevel: e.target.value, filterText: filterText });
    };
    const hendleSortText = (e) => {
        setParams({ filterLevel: filterLevel, filterText: e.target.value });
    };
    return (
        <>
            <Typography variant="h3">Sort</Typography>
            <Box>
                <form>
                    <TextField
                        id="title"
                        label="Title"
                        variant="outlined"
                        value={title}
                        onChange={(event) => {
                            setTitle(event.target.value);
                            hendleSortText(event);
                        }}
                    />
                    <Select
                        variant="filled"
                        labelId="level-label"
                        id="level"
                        label="level"
                        value={level}
                        onChange={(event) => {
                            setLevel(event.target.value);
                            hendleSortLevel(event);
                        }}
                    >
                        <MenuItem value="all">all</MenuItem>
                        <MenuItem value="easy">easy</MenuItem>
                        <MenuItem value="middle">middle</MenuItem>
                        <MenuItem value="hard">hard</MenuItem>
                    </Select>
                </form>
            </Box>
        </>
    );
};
