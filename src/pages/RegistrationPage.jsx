import { Button, TextField } from "@mui/material";
import { register } from "API";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const RegistrationPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register({ email, password, userName: userName }));
        setEmail("");
        setPassword("");
        setUserName("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                id="userName"
                label="UserName"
                variant="outlined"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
            />
            <TextField
                id="email"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
                id="password"
                label="Password"
                variant="outlined"
                multiline
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <Button type="submit" variant="contained">
                Отправить
            </Button>
        </form>
    );
};
