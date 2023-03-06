import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import styles from '@/styles/Home.module.css'
import Link from 'next/link';


const drawerWidth = 220;
const navItems = [
 <Link href='/' className={styles.linknavbar} key={1}>INICIO</Link>,
 <Link href='/categorias' className={styles.linknavbar} key={2}>CATEGORÍAS</Link>,   
 <Link href='/contacto' className={styles.linknavbar } key={4}>CONTACTO</Link>
];




function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
    
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 1 }}>
        <Image src="/raizlogo.png" alt='logoraizcarpinteria' width={190} height={110} priority className={styles.imglogo}/>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item,key) => (
          <ListItem key={key} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav" sx={{background: "#d0cec6"}} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ marginRight:"auto", display: { sm: 'none',color: "#000000"} }}
          >
            <MenuIcon />
          </IconButton> 
          {
            mobileOpen
            ?null
            :<Link href='/'><Image src="/raizlogo.png" alt='logoraizcarpinteria' width={190} height={110} priority className={styles.imglogo2}/></Link>
          }
              
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          </Typography>
          
          <Box sx={{ display: { xs: 'none', sm: 'block' ,marginRight:""} }}>
            {navItems.map((item, key) => (
              <Button key={key} sx={{ color: 'rgb(74, 65, 56)', }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
        
      </AppBar>
      <Box component="nav">
        
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none', },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,background: "#d0cec6" },
          }}
        >
          {drawer}
       
        </Drawer>       
      </Box>     
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
