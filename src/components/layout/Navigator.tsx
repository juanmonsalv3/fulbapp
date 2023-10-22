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
import { useRouter } from 'next/navigation';

interface ItemProps {
  label: string;
  target: string;
  icon: ReactNode;
}

function Item({ label, icon, target }: ItemProps) {
  const router = useRouter();

  return (
    <ListItem key={label} disablePadding onClick={() => router.push(target)}>
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
        <Item label='Estadísticas' target='/stats' icon={<Insights />} />
        <Item label='Partidos' target='/matches' icon={<Scoreboard />} />
        <Item label='Jugadores' target='/players' icon={<GroupIcon />} />
        <Item label='Canchas' target='/fields' icon={<StadiumIcon />} />
      </List>
    </div>
  );
}

export default Navigator;
