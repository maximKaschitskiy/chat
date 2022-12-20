import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const InputWrapper = styled(Grid)(({ }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center'
}));

const Form = styled('form')(({ }) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    width: '50%',
    alignItems: 'center',
}));


export { InputWrapper, Form };