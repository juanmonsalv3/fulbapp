import { Box, CssBaseline, Hidden, createTheme } from '@mui/material';
import { useState } from 'react';
import Navigator from './Navigator';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <main>
      <CssBaseline />
      <nav>
        <Hidden smUp implementation='js'>
          <Navigator
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
          />
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Navigator />
        </Hidden>
      </nav>
      <Box sx={{ pb: 7 }}>
        {/* <MenuAppBar /> */}
        {children}
        {/* <BottomNav /> */}
      </Box>
    </main>
  );
}
