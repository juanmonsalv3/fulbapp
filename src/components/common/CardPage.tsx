import React, { PropsWithChildren, Suspense, useRef, useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Menu,
  MenuItem,
  Paper,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Loading from './Loading';

interface CardPageProps {
  title: string;
  onNewClick?: () => void;
}

export const CardPage = ({
  children,
  title,
  onNewClick,
}: PropsWithChildren<CardPageProps>) => {
  const menuAnchor = useRef(null);
  const [open, setOpen] = useState(false);

  const showMenu = !!onNewClick;
  return (
    <Paper elevation={3} sx={{ width: '100%' }}>
      <Card>
        <CardHeader
          action={
            showMenu && (
              <IconButton onClick={() => setOpen(true)} ref={menuAnchor}>
                <MoreVertIcon />
              </IconButton>
            )
          }
          title={title}
        />
        {showMenu && (
          <Menu
            id='basic-menu'
            anchorEl={menuAnchor.current}
            open={open}
            onClose={() => setOpen(false)}
          >
            {onNewClick && <MenuItem onClick={onNewClick}>Nuevo</MenuItem>}
          </Menu>
        )}
        <CardContent>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </CardContent>
      </Card>
    </Paper>
  );
};
