import React from "react";
import Message from "../Types/Message";
import Type from "../Types/User";
import { FormGroup, FormLabel, Button } from "@mui/material";
import { InputWrapper, Form, StyledInput, StyledFormGroup } from "../Styles/Chat";

type Props = {
    handleSubmit: (event: {}) => void;
    user: Type;
}

const Chat = ({ handleSubmit, user }: Props) => {

    const [messageInput, setMessageInput] = React.useState<Message>({});

    return (
        <Form onSubmit={(event) => {
            event.preventDefault();
            if (messageInput?.text) {
                handleSubmit(messageInput);
                setMessageInput({});
            }
        }}>
            <StyledFormGroup>
                <FormLabel component="legend">Your Message</FormLabel>
                <InputWrapper>
                    <StyledInput
                        disabled={user ? false : true}
                        id="message"
                        type="text"
                        name="text"
                        value={messageInput.text || ""}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setMessageInput(prev => {
                                return { ...prev, [event.target.name]: event.target.value }
                            });
                        }}
                        placeholder="Hola!"
                    ></StyledInput>
                    <Button
                      disabled={user?.userName ? false : true}
                      type="submit">Send</Button>
                </InputWrapper>
            </StyledFormGroup>
        </Form>
    );
}

export default Chat;
