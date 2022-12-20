import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const AppWrapper = styled(Grid)(({ }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    alignItems: 'center',
    gap: '20px'
  }));

export { AppWrapper };