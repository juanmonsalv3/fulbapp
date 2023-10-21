import {
  Box,
  CssBaseline,
  Hidden,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { useState } from 'react';
import MenuAppBar from './MenuAppBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  const theme = createTheme({});

  const [mobileOpen, setMobileOpen] = useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <main>
        <CssBaseline />
        <Box sx={{ pb: 7 }}>
          <MenuAppBar>{children}</MenuAppBar>
        </Box>
      </main>
    </ThemeProvider>
  );
}
