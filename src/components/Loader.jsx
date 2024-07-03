import { Box } from "@mui/material";
import { rootModal } from "index";
import { createPortal } from "react-dom";
import { ClockLoader } from "react-spinners";

export const Loader = () => {
    return createPortal(
        <Box
            sx={{
                position: "fixed",
                top: "0",
                left: "0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
        >
            <ClockLoader color="#36d7b7" size={150} />
        </Box>,
        rootModal
    );
};
