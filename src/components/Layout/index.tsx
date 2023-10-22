import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import MenuAppBar from './MenuAppBar';
import { PropsWithChildren } from 'react';

export default function Layout({
  children,
  pageProps,
}: PropsWithChildren<{ pageProps: any }>) {
  const theme = createTheme({});

  return (
    <ThemeProvider theme={theme}>
      <main>
        <CssBaseline />
        <Box sx={{ pb: 7 }}>
          <MenuAppBar title={pageProps.title}>{children}</MenuAppBar>
        </Box>
      </main>
    </ThemeProvider>
  );
}
