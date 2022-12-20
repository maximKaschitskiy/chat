import { TextField, FormGroup } from "@mui/material";
import { styled } from "@mui/material/styles";

const InputWrapper = styled('div')(({ }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  }));

const Form = styled('form')(({ }) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
}));

const StyledInput = styled(TextField)(({ }) => ({
  width: '100%',
}));

const StyledFormGroup = styled(FormGroup)(({ }) => ({
  width: '50%',
}));

export { InputWrapper, Form, StyledInput, StyledFormGroup };