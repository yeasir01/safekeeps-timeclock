import * as React from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import BackspaceIcon from '@mui/icons-material/Backspace';

const RoundButton = styled(Button)(({ theme }) => ({
    color: theme.palette.text.primary,
    border: 'thin solid ' + theme.palette.grey[400],
    borderRadius: '50%',
    margin: theme.spacing(1),
    padding: theme.spacing(1),
}));

const DotIndicator = styled(Box)(({ theme }) => ({
    border: 'thin solid ' + theme.palette.grey[400],
    borderRadius: '50%',
    width: '18px',
    height: '18px',
    transition: theme.transitions.easing.easeInOut + ' 300ms',
    '&.active': {
        background: theme.palette.primary.main,
    },
}));

const PinInputIndicator = ({max, input}) => (
    [...new Array(max)].map((_, idx) => {
        const classes = input.length >= idx + 1 ? 'active' : '';

        return <DotIndicator key={idx} className={classes}/>;
    })
);

export default function PinPad({ size, font, maxPinLength }) {

    const [pin, setPin] = React.useState('');
    const [message, setMessage] = React.useState('Enter Pin');

    const handleSelect = (event) => {
        if (pin.length === maxPinLength) return;
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
        if (pin.length < maxPinLength) {
            return;
        }

        if (pin !== '1234') {
            setMessage('Wrong Pin, Try Again');
            return;
        }

        setMessage('Welcome User!');
    }, [pin, maxPinLength]);

    return (
        <Paper elevation={4} sx={{ width: 'fit-content', padding: '1rem', margin:'auto' }}>
            <Stack direction="row">
                <Container>         
                    <Typography variant='h5' align='center' fontSize={font}>
                        {message}
                    </ Typography>
                </ Container>
            </Stack>
            <Stack direction="row">
                <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginY: '1rem'}}>
                    <PinInputIndicator max={maxPinLength} input={pin}/>
                </ Container>
            </Stack>
            <Stack direction="row">
                <RoundButton onClick={handleSelect} sx={{ height: size, width: size, fontSize: font }} value={1}>1</RoundButton>
                <RoundButton onClick={handleSelect} sx={{ height: size, width: size, fontSize: font }} value={2}>2</RoundButton>
                <RoundButton onClick={handleSelect} sx={{ height: size, width: size, fontSize: font }} value={3}>3</RoundButton>
            </Stack>
            <Stack direction="row">
                <RoundButton onClick={handleSelect} sx={{ height: size, width: size, fontSize: font }} value={4}>4</RoundButton>
                <RoundButton onClick={handleSelect} sx={{ height: size, width: size, fontSize: font }} value={5}>5</RoundButton>
                <RoundButton onClick={handleSelect} sx={{ height: size, width: size, fontSize: font }} value={6}>6</RoundButton>
            </Stack>
            <Stack direction="row">
                <RoundButton onClick={handleSelect} sx={{ height: size, width: size, fontSize: font }} value={7}>7</RoundButton>
                <RoundButton onClick={handleSelect} sx={{ height: size, width: size, fontSize: font }} value={8}>8</RoundButton>
                <RoundButton onClick={handleSelect} sx={{ height: size, width: size, fontSize: font }} value={9}>9</RoundButton>
            </Stack>
            <Stack direction="row">
                <RoundButton onClick={handleClear} sx={{ height: size, width: size, fontSize: font, border: 'none' }} />
                <RoundButton onClick={handleSelect} sx={{ height: size, width: size, fontSize: font }} value={0}>0</RoundButton>
                <RoundButton onClick={handleDelete} sx={{ height: size, width: size, fontSize: font, border: 'none' }}>
                    <BackspaceIcon fontSize='large' />
                </RoundButton>
            </Stack>
        </Paper>
    )
};

PinPad.defaultProps = {
    size: 80,
    font: 24,
    maxPinLength: 4,
};