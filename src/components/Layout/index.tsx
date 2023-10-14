import { Box } from '@mui/material';
import BottomNav from './BottomNav';
import MenuAppBar from './MenuAppBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Box sx={{ pb: 7 }}>
        <MenuAppBar />
        {children}
        <BottomNav />
      </Box>
    </main>
  );
}
