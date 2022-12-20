import React from "react";
import User from "../Types/User";
import { FormGroup, TextField, FormLabel, Button } from "@mui/material";
import { InputWrapper, Form } from "../Styles/Login";

type Props = {
    handleSubmit: (event: {}) => void;
    handleLogout: (event: {}) => void;
    user: User;
}

const Login = ({ handleSubmit, handleLogout, user }: Props) => {

    const [userInput, setUserInput] = React.useState<User>(user ?? {});

    return (
        <Form onSubmit={
            (event) => {
                event.preventDefault();
                if (userInput?.userName) {
                    handleSubmit(userInput);
                }
                if (user?.userName) {
                    handleLogout(event);
                }
            }
        }>
            <FormGroup>
                <FormLabel component="legend">Your Nickname</FormLabel>
                <InputWrapper>
                    <TextField
                        disabled={user?.userName ? true : false}
                        id="userName"
                        type="text"
                        name="userName"
                        value={user?.userName ? user.userName : (userInput.userName || "")}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setUserInput(prev => {
                                return { ...prev, [event.target.name]: event.target.value }
                            });
                        }}
                        placeholder="Maxim"
                    ></TextField>
                    <Button type="submit">{user?.userName ? "Logout" : "Login"}</Button>
                </InputWrapper>
            </FormGroup>
        </Form>
    );
}

export default Login;
