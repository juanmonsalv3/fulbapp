import React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { NAV_PAGES } from '../../../constants/pages';

function BottomNav() {
  const [value, setValue] = React.useState(0);
  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {NAV_PAGES.map((page) => (
          <BottomNavigationAction
            key={page.pageUrl}
            label={page.label}
            icon={<page.Icon />}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
}

export default BottomNav;
