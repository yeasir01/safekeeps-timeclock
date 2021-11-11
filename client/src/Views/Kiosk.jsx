import Grid from '@mui/material/Grid';
import UserListContainer from '../Components/UserListContainer';

export default function Kiosk() {

  return (
    <Grid container>
        <Grid item md={6} xs={0} sx={{ background: 'lightBlue' }}>
            <div>Hello World</div>
        </Grid>
        <Grid item md={6} xs={12}>
            <UserListContainer />
        </Grid>
    </Grid>
  )
}