import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
    const styles = {
        display: 'flex' , 
        justifyContent : 'center', 
        alignItems: 'center', 
        height: '100vh'
    }
  return (
    <Box sx={styles}>
      <CircularProgress />
    </Box>
  );
}