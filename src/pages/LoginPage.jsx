import { Button, TextField } from "@mui/material";
import { login } from "API";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({email, password}));
        setEmail("");
        setPassword("");
    };
    return (
        <form onSubmit={handleSubmit}>
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
