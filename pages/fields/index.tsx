import { useRef, useState } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import prisma from '../../lib/prisma';

async function getFields() {
  const fields = await prisma.field.findMany();
  return fields;
}

export const getStaticProps: GetStaticProps = async () => {
  const fields = await getFields();
  return {
    props: { fields, title: 'Fulbo Medallo' },
    revalidate: 10,
  };
};

export default function Page({
  fields,
}: {
  fields: Awaited<ReturnType<typeof getFields>>;
}) {
  const menuAnchor = useRef(null);
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Head>
        <title>Fulbapp</title>
      </Head>

      <Paper elevation={3} sx={{ width: '100%' }}>
        <Card>
          <CardHeader
            action={
              <IconButton
                aria-label='settings'
                onClick={() => setOpen(true)}
                ref={menuAnchor}
              >
                <MoreVertIcon />
              </IconButton>
            }
            title='Lista de canchas'
          />
          <Menu
            id='basic-menu'
            anchorEl={menuAnchor.current}
            open={open}
            onClose={() => setOpen(false)}
          >
            <MenuItem>Nuevo</MenuItem>
          </Menu>
          <CardContent>
            <List>
              {fields.map((field) => (
                <div key={field.id}>
                  <ListItem
                    alignItems='flex-start'
                    secondaryAction={
                      <IconButton edge='end' aria-label='comments'>
                        <MoreVertIcon />
                      </IconButton>
                    }
                  >
                    <ListItemText
                      primary={field.name}
                      secondary={`Capacidad: ${field.capacity} jugadores.`}
                    />
                  </ListItem>
                  <Divider component='li' />
                </div>
              ))}
            </List>
          </CardContent>
        </Card>
      </Paper>
    </div>
  );
}
