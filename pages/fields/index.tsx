import React, { useRef, useState } from 'react';
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
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import prisma from '../../lib/prisma';
import EditDeleteList from '@/components/common/EditDeleteList';

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
            <EditDeleteList
              title='Canchas'
              items={fields.map((field) => ({
                _id: field.id,
                primaryText: field.name,
                secondaryText: `Capacidad: ${field.capacity}`,
              }))}
              onEditClick={console.log}
              onDeleteClick={console.log}
            />
          </CardContent>
        </Card>
      </Paper>
    </div>
  );
}
