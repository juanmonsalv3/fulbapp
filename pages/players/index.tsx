import { GetStaticProps } from 'next';
import Head from 'next/head';
import prisma from '../../lib/prisma';
import EditDeleteList from '@/components/common/EditDeleteList';
import { CardPage } from '@/components/common/CardPage';

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
  return (
    <>
      <Head>
        <title>Jugadores | Fulbapp</title>
      </Head>

      <CardPage title='Lista de Jugadores' onNewClick={console.log}>
        <EditDeleteList
          title='Jugadores'
          items={fields.map((field) => ({
            _id: field.id,
            primaryText: field.name,
            secondaryText: `Capacidad: ${field.capacity}`,
          }))}
          onEditClick={console.log}
          onDeleteClick={console.log}
        />
      </CardPage>
    </>
  );
}
