import { Box, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { errorAcDel } from "../redux/auth/sliceAccount";
import { errorDel } from "../redux/slice";

export const Error404Page = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            navigate("/");
            dispatch(errorDel())
            dispatch(errorAcDel())
        }, 10000);
    }, [dispatch, navigate]);
    return (
        <Container maxWidth="xl">
            <Box>
                <Typography sx={{ color: "#ff0000", fontSize: "40px" }}>
                    404 Not Found
                </Typography>
            </Box>
        </Container>
    );
};
