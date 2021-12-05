import * as React from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Zoom from '@mui/material/Zoom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import BackspaceIcon from '@mui/icons-material/Backspace';

const RoundButton = styled(Button)(({ theme }) => ({
    color: theme.palette.text.primary,
    border: 'thin solid ' + theme.palette.grey[400],
    borderRadius: '50%',
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    '&::after': {
        content: '""',
        display: 'block',
        paddingBottom: '100%',
    },
}));

const PinInputUi = ({max, input}) => (
    [...new Array(max)].map((_, idx) => {
        const isSelected = input.length >= idx + 1;

        return (
            <Box key={idx}>
                { isSelected ? 
                    <Zoom in><CircleIcon fontSize='medium' color='primary'/></ Zoom> : 
                    <CircleOutlinedIcon fontSize='small' color='disabled'/>
                }
            </Box>
        )
    })
);

export default function PinPad({ width, fontSize, maxLength }) {

    const [pin, setPin] = React.useState('');
    const [message, setMessage] = React.useState('Enter Pin');

    const handleSelect = (event) => {
        if (pin.length === maxLength) return;
        setPin(prev => prev + event.target.value);
    };

    const handleDelete = () => {
        if (pin.length === 0) return;
        setPin(prev => prev.slice(0, -1));
    };

    const handleClear = () => {
        setPin('');
        setMessage('Enter Pin')
    };

    React.useEffect(() => {
        if (pin.length < maxLength) {
            return;
        }

        if (pin !== '1234') {
            setMessage('Wrong Pin, Try Again');
            return;
        }

        setMessage('Welcome User!');
    }, [pin, maxLength]);

    return (
        <Paper elevation={4} sx={{ width: 'fit-content', padding: '1rem', margin:'auto' }}>
            <Stack direction="row">
                <Container>         
                    <Typography variant='h5' align='center'>
                        {message}
                    </ Typography>
                </ Container>
            </Stack>
            <Stack direction="row">
                <Container sx={{height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <PinInputUi max={maxLength} input={pin}/>
                </ Container>
            </Stack>
            <Stack direction="row">
                <RoundButton onClick={handleSelect} sx={{ width, fontSize }} value={1}>1</RoundButton>
                <RoundButton onClick={handleSelect} sx={{ width, fontSize }} value={2}>2</RoundButton>
                <RoundButton onClick={handleSelect} sx={{ width, fontSize }} value={3}>3</RoundButton>
            </Stack>
            <Stack direction="row">
                <RoundButton onClick={handleSelect} sx={{ width, fontSize }} value={4}>4</RoundButton>
                <RoundButton onClick={handleSelect} sx={{ width, fontSize }} value={5}>5</RoundButton>
                <RoundButton onClick={handleSelect} sx={{ width, fontSize }} value={6}>6</RoundButton>
            </Stack>
            <Stack direction="row">
                <RoundButton onClick={handleSelect} sx={{ width, fontSize }} value={7}>7</RoundButton>
                <RoundButton onClick={handleSelect} sx={{ width, fontSize }} value={8}>8</RoundButton>
                <RoundButton onClick={handleSelect} sx={{ width, fontSize }} value={9}>9</RoundButton>
            </Stack>
            <Stack direction="row">
                <RoundButton onClick={handleClear} sx={{ width, fontSize, border: 'none' }} />
                <RoundButton onClick={handleSelect} sx={{ width, fontSize }} value={0}>0</RoundButton>
                <RoundButton onClick={handleDelete} sx={{ width, fontSize, border: 'none' }}>
                    <BackspaceIcon fontSize='large' />
                </RoundButton>
            </Stack>
        </Paper>
    )
};

PinPad.defaultProps = {
    width: '80px',
    fontSize: '24px',
    maxLength: 4,
};