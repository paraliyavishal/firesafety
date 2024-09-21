import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/images/home/logo.png';
import { Container, Grid } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import EastIcon from '@mui/icons-material/East';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const isActive = (path) => currentPath === path;

  const drawerList = (
    <Box
      sx={{ width: 250, backgroundColor: "#21324D", height: "100%" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box display={"flex"} alignItems={"center"} py={2} justifyContent={"space-around"} sx={{ backgroundColor: "white" }}>
        <Box sx={{ display: { xs: 'block', md: 'none' }, mr: 1 }}>
          {/* <img src={logo} alt="Logo" width={"150px"} onClick={() => navigate("/")} /> */}
        </Box>
        <IconButton onClick={toggleDrawer} sx={{ color: "white", backgroundColor: "#21324D", borderRadius: "8px" }} >
          <EastIcon />
        </IconButton>
      </Box>
      {['/', '/Our Services', '/About Us', '/Contact Us', '/Support'].map((path) => (
        <MenuItem key={path} onClick={() => navigate(path)} sx={{ backgroundColor: isActive(path) ? '#DF3E26' : 'transparent' }}>
          <Typography textAlign="center" sx={{ cursor: 'pointer', color: isActive(path) ? 'white' : 'white', fontFamily: "'Public Sans', sans-serif", "&:hover": { color: "#DF3E26" } }}>
            {path === '/' ? 'Home' : path.slice(1)}
          </Typography>
        </MenuItem>
      ))}
    </Box>
  );

  return (
    <Box sx={{ backgroundColor: "white" }}>
    <Container maxWidth='xl'>
      <AppBar position='static' sx={{ backgroundColor: "white",boxShadow: "none",padding:"10px 0px" }}>
        {/* <Box px={{ xs: 2, md: 10 }}> */}
          <Toolbar disableGutters >
            <Grid container item xs={12} alignItems="center">
              <Grid item xs={6} md={3} display="flex" justifyContent={{ xs: 'flex-start', md: 'flex-start' }}>
                <Box sx={{ display: { xs: 'none', md: 'block' }, mr: 1 }}>
                  {/* <img src={logo} alt="Logo" width={"230px"} onClick={() => navigate("/")} /> */}
                </Box>
                <Box sx={{ display: { xs: 'block', md: 'none' }, mr: 1 }}>
                  {/* <img src={logo} alt="Logo" width={"150px"} onClick={() => navigate("/")} /> */}
                </Box>
              </Grid>
              <Grid item xs={6} md={9} display="flex" justifyContent={{ xs: 'flex-end', md: 'flex-start' }} alignItems="center">
                <IconButton
                  size="large"
                  aria-label="open navigation menu"
                  aria-haspopup="true"
                  onClick={toggleDrawer(true)}
                  sx={{ color: 'black', display: { xs: 'flex', md: 'none' } }}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="left"
                  open={drawerOpen}
                  onClose={toggleDrawer(false)}
                  sx={{ marginTop: "100px" }}
                >
                  {drawerList}
                </Drawer>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 0 }}>
                  {['/', '/OurServices', '/AboutUs', '/ContactUs', '/Support'].map((path) => (
                    <Typography
                      key={path}
                      sx={{
                        my: 2,
                        color: isActive(path) ? '#DF3E26' : 'black',
                        display: 'block',
                        fontWeight: 500,
                        fontSize: '18px',
                        cursor: "pointer",
                        fontFamily: "'Public Sans', sans-serif",
                        padding: { lg: '0px 30px', md: '0px 20px' },
                        "&:hover": { color: "#DF3E26", transition: ".3s" }
                      }}
                      onClick={() => navigate(path)}
                    >
                      {path === '/' ? 'Home' : path.slice(1)}

                    </Typography>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        {/* </Box> */}
      </AppBar>
      </Container>
    </Box>
  );
}

export default Navbar;