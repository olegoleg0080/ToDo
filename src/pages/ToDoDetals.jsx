import { Box, Container, Typography, useTheme } from "@mui/material";
import { fetchToDoById } from "API";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toDoById } from "../redux/seectorsToDO";

export const ToDoDetal = () => {
    const { toDoId } = useParams();
    const dispatch = useDispatch();
    const theme = useTheme();
    const value = useSelector(toDoById)
    useEffect(() => {
        dispatch(fetchToDoById(toDoId));
    }, [dispatch, toDoId]);
    return (
        <>
            <Container
                maxWidth="sm"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "40px",
                    bgcolor: "rgba(0,0,0,0.2)",
                    padding: "50px",
                }}
            >
                <Typography variant="h2">{value.title}</Typography>
                <Typography variant="body1">{value.description}</Typography>

                <Box
                    sx={{
                        display: "flex",
                        gap: "20px",
                        bgcolor: "rgba(0,0,0,0.5)",
                        padding: "20px",
                    }}
                >
                    <Typography variant="h3" sx={{ display: "flex" }}>
                        level:
                        <Typography
                            variant="span"
                            sx={{
                                color:
                                    value.level === "easy"
                                        ? theme.LVL.LEVEL_THREE
                                        : value.level === "normal"
                                        ? theme.LVL.LEVEL_TWO
                                        : value.level === "hard"
                                        ? theme.LVL.LEVEL_ONE
                                        : "#000",
                            }}
                        >
                            {value.level}
                        </Typography>
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            color: value.status ? theme.TF.T : theme.TF.F,
                        }}
                    >
                        {value?.status ? "Виконано" : "Не виконано"}
                    </Typography>
                </Box>
            </Container>
        </>
    );
};
