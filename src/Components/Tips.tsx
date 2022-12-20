import React from "react";
import Message from "../Types/Message";
import Type from "../Types/User";
import { TipsWrapper } from "../Styles/Tips";
import { Typography } from "@mui/material";

type Props = {
    hint: string;
}

const Tips = ({ hint }: Props) => {

    return (
        <TipsWrapper>
            <Typography>{hint}</Typography>
        </TipsWrapper>
    );
}

export default Tips;
