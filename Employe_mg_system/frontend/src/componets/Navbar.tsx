import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InfoIcon from '@mui/icons-material/Info';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import BorderAllTwoToneIcon from '@mui/icons-material/BorderAllTwoTone';

import {Link,useLocation} from 'react-router-dom';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Navi() {
  const location =useLocation()
  const path = location.pathname;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                mr: 2,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            EMPLOYE MANAGEMENT SYTEM
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
               <ListItem disablePadding>
                  <ListItemButton component={Link} to="/" selected={"/" === path}>
                     <ListItemIcon>
                    <HomeIcon />
                     </ListItemIcon>
                     <ListItemText primary={'Home'} />
                  </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                  <ListItemButton component={Link} to="/Addemploye" selected={"/Addemploye" === path}>
                     <ListItemIcon>
                    <AddBoxIcon />
                     </ListItemIcon>
                     <ListItemText primary={'Add New Emoloye'} />
                  </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                  <ListItemButton component={Link} to="/Skill" selected={"/Skill" === path}>
                     <ListItemIcon>
                    <MiscellaneousServicesIcon />
                     </ListItemIcon>
                     <ListItemText primary={' skill'} />
                  </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                  <ListItemButton component={Link} to="/dashbord" selected={"/dashbord" === path}>
                     <ListItemIcon>
                    <DashboardCustomizeIcon />
                     </ListItemIcon>
                     <ListItemText primary={'Dashbord'} />
                  </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                  <ListItemButton component={Link} to="/login" selected={"/login" === path}>
                     <ListItemIcon>
                    <LoginIcon />
                     </ListItemIcon>
                     <ListItemText primary={'Login page'} />
                  </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                  <ListItemButton component={Link} to="/Empskill" selected={"/Empskill" === path}>
                     <ListItemIcon>
                    <InfoIcon />
                     </ListItemIcon>
                     <ListItemText primary={'About Emp skill'} />
                  </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                  <ListItemButton component={Link} to="/Register" selected={"/Register" === path}>
                     <ListItemIcon>
                    <AppRegistrationIcon />
                     </ListItemIcon>
                     <ListItemText primary={'Register'} />
                  </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                  <ListItemButton component={Link} to="/Departement" selected={"/Departement" === path}>
                     <ListItemIcon>
                    <BorderAllTwoToneIcon />
                     </ListItemIcon>
                     <ListItemText primary={'Departement '} />
                  </ListItemButton>
              </ListItem>

          
        </List>
        <Divider />
        
        
      </Drawer>
      <Main open={open}>
        
      </Main>
    </Box>
  );
}
