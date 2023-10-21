import { Drawer as MuiDrawer, DrawerProps } from '@mui/material';
import React from 'react';

function Drawer({ children, ...props }: Omit<DrawerProps, 'anchor'>) {
  return (
    <MuiDrawer
      anchor='right'
      PaperProps={{
        sx: {
          width: '400px',
        },
      }}
      {...props}
    >
      {children}
    </MuiDrawer>
  );
}

export default Drawer;
