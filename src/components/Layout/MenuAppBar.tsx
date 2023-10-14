import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AuthMenu from './AuthMenu';
import { usePathname } from 'next/navigation';
import { PATHNAMES } from '../../../constants/pages';

export default function MenuAppBar() {
  const pathname = usePathname();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          {/* <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            {PATHNAMES[pathname]}
          </Typography>
          <AuthMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
