
import React from 'react';
import { Box, Typography } from '@mui/material';

export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: { xs: '150px', sm: '200px', md: '250px' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'white',
        mt: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 4, md: 6 }, 
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 900,
          color: 'black',
          letterSpacing: { xs: 1, sm: 2, md: 3 },
          lineHeight: 1.1,
          fontSize: {
            xs: '36px', 
            sm: '56px',
            md: '80px',
            lg: '100px', 
          },
        }}
      >
        The Rick and Morty API
      </Typography>
    </Box>
  );
}
