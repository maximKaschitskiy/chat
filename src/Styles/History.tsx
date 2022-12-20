import { List } from '@mui/material';
import { styled } from "@mui/material/styles";

const StyledList = styled(List)(({ }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '45%',
    width: '50%',
    alignItems: 'center',
    overflowY: 'scroll',
    padding: '0'
  }));

export { StyledList };