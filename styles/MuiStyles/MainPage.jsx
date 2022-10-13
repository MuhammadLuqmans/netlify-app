import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const RootStyle = styled(Box)(({ theme }) => ({
  height: '100vh',
  verticalAlign: 'center',
  overflow: 'hidden',
}));

export const Wrapper = styled(Box)(({ theme }) => ({
  height: '30vh',
  display: 'flex',
  flexDirection: 'column',
  verticalAlign: 'center',
  alignItems: 'start',
  justifyContent: 'space-around',
  padding: '0 4%',
  [theme.breakpoints.down('md')]: {
    height: '20vh',
    marginBottom: '-100px',
  },
  marginBottom: '-50px',
}));

export const TitleTypo = styled(Typography)(({ theme }) => ({
  fontSize: 28,
  fontWeight: 'bold',
  color: '#000',
  fontFamily: 'Jockey One, sans-serif',
  [theme.breakpoints.down('md')]: {
    fontSize: 16,
  },
}));

export const SubTitle = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 'bold',
  color: 'gray',
  fontFamily: 'Jockey One, sans-serif',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const CssGrid = styled(Box)(({ theme }) => ({
  fontSize: 24,
  color: '#000',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  width: '100%',
}));

export const MuiBox = styled(Box)(({ theme }) => ({
  fontSize: 24,
  color: '#000',
  padding: '0px 20px',
  display: 'flex',
  flexDirection: 'column',
  verticalAlign: 'center',
  alignItems: 'start',
  justifyContent: 'space-around',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    padding: '0px 10px',
  },
}));

export const Heading = styled(Typography)(({ theme }) => ({
  fontSize: 20,
  fontWeight: 'bold',
  color: '#000',
  textTransform: 'capitalize',
  fontFamily: 'Jockey One, sans-serif',
  [theme.breakpoints.down('md')]: {
    fontSize: 16,
  },
}));

export const RatingTextBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const MuiTextGray = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  color: 'gray',
  fontFamily: 'Jockey One, sans-serif',
}));

export const LoadingData = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100%',
  background: '#d1eb67'
}));
