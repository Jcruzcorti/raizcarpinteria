import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';



export default function NavBar() {



  return (
    
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 2,
        },
      }}
    >

      <ButtonGroup variant="text" color="primary" aria-label="text button group">
        <Button size="medium">INICIO</Button>
        <Button size="medium">CATEGORÍAS</Button>
        <Button size="medium">SOBRE NOSOTROS</Button>
        <Button size="medium">CONTACTO</Button>
        <Button size="medium"><SearchIcon/></Button>
      </ButtonGroup>
    </Box>
  );
}