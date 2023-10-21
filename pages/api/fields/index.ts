import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';
import { Field } from '../../../types/fulbo';

async function getFields() {
  const fields = await  prisma.field.findMany();
  return fields;
}

async function postField(field: Field) {
  const newField = await prisma.field.create({
    data: field,
  });

  const f = await prisma.field.findUnique({ where: { id: '' } });
  return newField;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if(req.method === 'GET') {

  }
  if (req.method === 'POST') {
    const newField = await postField(req.body);
    res.status(200).json(newField);
  }
}
