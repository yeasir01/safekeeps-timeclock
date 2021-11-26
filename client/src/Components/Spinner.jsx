import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const styles = {
  progress: {
    bgcolor: 'action.disabled',
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
}

export default function Spinner() {
  return (
    <Box sx={styles.progress}>
      <CircularProgress />
    </Box>
  );
}