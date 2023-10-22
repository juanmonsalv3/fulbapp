import { ReactNode } from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';

import Insights from '@mui/icons-material/Insights';
import Scoreboard from '@mui/icons-material/Scoreboard';
import GroupIcon from '@mui/icons-material/Group';
import StadiumIcon from '@mui/icons-material/Stadium';

function Item({ label, icon }: { label: string; icon: ReactNode }) {
  return (
    <ListItem key={label} disablePadding>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
}

function Navigator() {
  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <Item label='Estadísticas' icon={<Insights />} />
        <Item label='Partidos' icon={<Scoreboard />} />
        <Item label='Jugadores' icon={<GroupIcon />} />
        <Item label='Canchas' icon={<StadiumIcon />} />
      </List>
    </div>
  );
}

export default Navigator;
