import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
    Button,
  Box,
  
} from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';


 function Header() {
  return (
   <AppBar position="static" color="white" sx={{ boxShadow: 'none',  paddingX: { xs: 2, sm: 4, md: 6 } }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
     
        <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '45px', gap: 1 }}>
        
            <HomeRoundedIcon  sx={{ fontSize: 40, color: 'black' }} />
        </Box>


             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
           <Typography color="inherit" sx={{fontWeight: '700', fontSize:'18px',marginRight: {xs: "1px", sm: "12px", md: "25px"},  transition: 'color 0.3s',
              '&:hover': { color: 'rgb(255, 152, 0)'}}}>Docs</ Typography>
          <Typography color="inherit" sx={{fontWeight: '700', fontSize:'18px',marginRight: {xs: "1px", sm: "12px", md: "25px"},  transition: 'color 0.3s',
              '&:hover': { color: 'rgb(255, 152, 0)'} }}>About</ Typography>
          <Button
            variant="contained"
            color="white"
            sx={{ textTransform: 'none', border: '1px solid rgb(255, 152, 0)', borderRadius:'10px', fontSize:'18px', backgroundColor: 'white',
              '&:hover': { backgroundColor: 'rgb(255, 152, 0)', color: 'black' }, display: { xs: 'none', sm: 'block' }   }}
          >
           SUPPORT US
          </Button>
             <IconButton
            sx={{ display: { xs: 'block', sm: 'none', }, backgroundColor: 'rgb(255, 152, 0)', color: 'white', borderRadius:'10px' , alignItems:'center' }}
            
          >
            <FavoriteIcon></FavoriteIcon>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  
     
  );
}
export default Header;
