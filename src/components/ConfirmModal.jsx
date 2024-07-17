import { Box, Button, Modal, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { isshowModal } from "../redux/seectorsToDO";

export const ConfirmModal = ({delToDo}) => {
    const isShowModal = useSelector(isshowModal);
    return(
        <Modal
        open={isShowModal}
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
            <Typography variant="h3">You Shure?</Typography>
            <Box>
                <Button
                    sx={{
                        fontSize: "20px",
                        "&:hover": {
                            bgcolor: " #00ff00",
                        },
                    }}
                    onClick={()=>{delToDo(true)}}
                >
                    YES
                </Button>
                <Button
                    sx={{
                        fontSize: "20px",
                        "&:hover": {
                            bgcolor: "#ff0000",
                        },
                    }}
                    onClick={()=>{delToDo(null)}}
                >
                    NO
                </Button>
            </Box>
        </Box>
    </Modal>
    )
};
