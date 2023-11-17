import { IconButton, List, ListItem, ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import React from 'react';

type Item = {
  _id: string;
  primaryText: string;
  secondaryText?: string;
};

type Props = {
  title: string;
  items?: Item[] | null;
  noRowsLabel?: string;
  multiColumn?: boolean;
  onItemClick?: (id: string) => void;
  onEditClick: (id: string) => void;
  onDeleteClick: (id: string) => void;
};

function EditDeleteList({
  items,
  multiColumn,
  noRowsLabel = 'No hay registros',
  onItemClick = () => {},
  onEditClick,
  onDeleteClick,
}: Props) {
  const itemSx = multiColumn
    ? {
        width: { md: '50%', xs: '100%' },
      }
    : {};
  return (
    <>
      {items && (
        <List
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {items.length === 0 && (
            <ListItem>
              <ListItemText primary={noRowsLabel} />
            </ListItem>
          )}
          {items.map((item) => (
            <ListItem
              key={item._id}
              sx={{ ...itemSx, borderBottom: '1px solid #ddd', py: 0, pl: 2 }}
              disableGutters
              secondaryAction={
                <>
                  <IconButton
                    color='primary'
                    onClick={onEditClick.bind(null, item._id)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color='primary'
                    onClick={onDeleteClick.bind(null, item._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              <ListItemText
                onClick={onItemClick.bind(null, item._id)}
                primaryTypographyProps={{
                  fontSize: '16px',
                }}
                secondaryTypographyProps={{
                  fontSize: '14px',
                }}
                primary={item.primaryText}
                secondary={item.secondaryText}
              />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
}

export default EditDeleteList;
