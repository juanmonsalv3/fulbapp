import React from 'react';
import { useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import { AccountCircle } from '@mui/icons-material';
import {
  Avatar,
  CircularProgress,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';

function AuthMenu() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (status === 'loading')
    return <CircularProgress style={{ color: 'white' }} size='2rem' />;

  if (!session) {
    return (
      <div>
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='menu-appbar'
          aria-haspopup='true'
          onClick={() => router.push('/api/auth/signin')}
          color='inherit'
          sx={{
            padding: 0,
          }}
        >
          <AccountCircle />
        </IconButton>
      </div>
    );
  }

  return (
    <div>
      <IconButton
        size='large'
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleMenu}
        color='inherit'
        sx={{
          padding: 0,
        }}
      >
        <Avatar alt={session?.user.name} src={session?.user.image} />
        {/* <AccountCircle /> */}
      </IconButton>
      <Menu
        id='menu-appbar'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={() => signOut()}>Cerrar Sesión</MenuItem>
      </Menu>
    </div>
  );
}

export default AuthMenu;
