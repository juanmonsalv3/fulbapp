import { Button } from '@mui/material';
import prisma from '../lib/prisma';
import { GetStaticProps } from 'next';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

export const getStaticProps: GetStaticProps = async () => {
  const users = await prisma.user.findMany();
  return {
    props: { users },
    revalidate: 10,
  };
};

export default function Page({
  users,
}: {
  users: Prisma.UserDelegate<DefaultArgs>;
}) {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <Button variant='contained'>Hello world</Button>
    </div>
  );
}
