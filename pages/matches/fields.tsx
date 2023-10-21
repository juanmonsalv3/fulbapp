import { useState } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Button } from '@mui/material';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import prisma from '../../lib/prisma';
import Drawer from '@/components/common/Drawer';

export const getStaticProps: GetStaticProps = async () => {
  const fields = await prisma.field.findMany();
  return {
    props: { fields },
    revalidate: 10,
  };
};

export default function Page({
  fields,
}: {
  fields: Prisma.FieldDelegate<DefaultArgs>;
}) {
  console.log(fields);
  const [open, setOpen] = useState(true);
  return (
    <div>
      <Head>
        <title>Fulbapp</title>
      </Head>
      <h1>Hello, Next.js!</h1>
      <Button variant='contained' onClick={() => setOpen(true)}>
        Nuevo
      </Button>

      <Drawer open={open} onClose={() => setOpen(false)}>
        Drawer content
      </Drawer>
    </div>
  );
}
