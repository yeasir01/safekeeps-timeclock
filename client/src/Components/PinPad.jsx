import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';

export default function PinPad() {
    const numArray = ["1", '2', '3', '4', '5', '6', '7', '8', '9' ,'', '0', 'f'];
    
    return (
        <Grid container justifyContent='center' width='265px'>
            {numArray.map(key => (
                <Grid item padding={2} flexBasis='33.3%' key={key}>
                    <Fab aria-label="key" sx={{bgcolor: 'background.paper', width: '100%'}}>
                        {key}
                    </Fab>
                </Grid>
            ))}
        </Grid>
    )
};