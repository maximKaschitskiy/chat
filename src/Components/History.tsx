import React from "react";
import { useRef, useEffect } from "react";
import Message from "../Types/Message";
import Moment from "react-moment";
import moment from "moment";

import { ListItem, Typography, ListItemText } from '@mui/material';
import { StyledList } from "../Styles/History";

type Props = {
    messages: Message[];
}

const Messenges = ({ messages }: Props) => {

    const bottomRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ block: 'end', behavior: 'smooth' });
      }, [messages?.length]);

    return (
        <StyledList>
            {messages?.map((item: Message) =>
                <ListItem key={item.id}>
                    <ListItemText
                        primary={item.user}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    <Moment format="HH:MM">{item.time as moment.Moment}</Moment>
                                </Typography>
                                {` — ${item.text}`}
                            </React.Fragment>
                        }
                    />
                </ListItem>
            )}
            <div ref={bottomRef} />
        </StyledList>
    );
}

export default Messenges;