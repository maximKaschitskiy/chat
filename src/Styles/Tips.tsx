import { styled } from "@mui/material/styles";

const TipsWrapper = styled('div')(({ }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '45%',
    width: '50%',
    alignItems: 'center',
    overflowY: 'scroll'
  }));

export {TipsWrapper}