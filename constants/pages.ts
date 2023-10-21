import Insights from '@mui/icons-material/Insights';
import Scoreboard from '@mui/icons-material/Scoreboard';
import GroupIcon from '@mui/icons-material/Group';

export const PATHNAMES: Record<string, string> = {
  '/': 'Inicio',
};

export const NAV_PAGES = [
  {
    pageUrl: '/matches',
    Icon: Scoreboard,
    label: 'Partidos',
  },
  {
    pageUrl: '/stats',
    Icon: Insights,
    label: 'Estadísticas',
  },
  {
    pageUrl: '/players',
    Icon: GroupIcon,
    label: 'Jugadores',
  },
];
