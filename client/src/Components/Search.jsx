import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function Search({ state, handleChange }) {
    return (
        <Box autoComplete="off" noValidate component="form" m='1rem'>
            <TextField
                fullWidth
                label="Search"
                variant="outlined"
                value={state}
                onChange={handleChange}
            />
        </Box>
    )
};