import { Button } from '@mui/material';
import prisma from '../lib/prisma';
import { GetStaticProps } from 'next';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import Head from 'next/head';

export const getStaticProps: GetStaticProps = async () => {
  const fields = await prisma.field.findMany();
  return {
    props: { fields, title: 'Fulbo Medallo' },
    revalidate: 10,
  };
};

export default function Page({
  fields,
}: {
  fields: Prisma.FieldDelegate<DefaultArgs>;
}) {
  return (
    <div>
      <Head>
        <title>Fulbapp</title>
      </Head>
      <h1>Hello, Next.js!</h1>
      <Button variant='contained'>Hello world</Button>
    </div>
  );
}
