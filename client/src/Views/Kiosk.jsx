import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import UserListContainer from '../Components/UserListContainer';
import DigitalClock from '../Components/DigitalClock';
import logo from '../Assets/img/safekeeps_logo_light.png';

const styles = {
  main: {
    height: '100vh',
  },
  leftGrid: {
    bgcolor: 'primary.main',
    display: {
      xs: 'none',
      sm: 'block'
    },
  },
  rightGrid: {
    bgcolor: 'background.paper', 
    color: 'text.primary',
  },
  gridRows: {
    height: '100%', 
    padding: '1.25rem',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  companyText: {
    color: 'primary.contrastText',
  },
  digitalClock: {
    color: 'primary.contrastText', 
    padding: '1.25rem',
  },
  logo: {
    height: '38px',
  }
}

export default function Kiosk() {
  return (
    <Grid container component='main' sx={styles.main}>
      <Grid item sm={6} sx={styles.leftGrid}>
        <Grid container sx={styles.gridRows}>
        <Grid item>
            <Box sx={styles.companyText}>
              <div>Acme Industries Company, LLC.</div>
            </Box>
          </Grid>
          <Grid item>
            <DigitalClock includeDate sx={styles.digitalClock} />
          </Grid>
          <Grid item>
            <Box component="div" sx={styles.logo}>
              <img src={logo} alt="safe keeps logo" height='100%' width='auto' />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={6} xs={12} sx={styles.rightGrid}>
        <UserListContainer />
      </Grid>
    </Grid>
  )
}