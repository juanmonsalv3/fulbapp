import { PropsWithChildren, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Drawer, IconButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AuthMenu from './AuthMenu';
import Navigator from './Navigator';

const drawerWidth = 240;
const calcWidth = `calc(100% - ${drawerWidth}px)`;

export default function MenuAppBar({
  children,
  title = 'Fulbo Medallo',
}: PropsWithChildren<{ title?: string }>) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const mdOrHigher = useMediaQuery(theme.breakpoints.up('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ flexGrow: 1, ml: { md: `${drawerWidth}px` } }}>
      <AppBar
        position='fixed'
        sx={{
          width: { md: calcWidth },
        }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div' flexGrow={1}>
            {title}
          </Typography>
          <AuthMenu />
        </Toolbar>
      </AppBar>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant={mdOrHigher ? 'permanent' : 'temporary'}
          open={mdOrHigher ? true : mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            'display': mdOrHigher
              ? { xs: 'none', md: 'block' }
              : { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          <Navigator />
        </Drawer>
      </Box>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
