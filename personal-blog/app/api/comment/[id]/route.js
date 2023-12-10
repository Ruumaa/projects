import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export const PATCH = async (req, context) => {
  try {
    const { params } = context;
    const body = await req.json();
    const response = await prisma.comment.update({
      // TODO!! Update di screen kirim idnya gimana? update di link ke idnya ambil params?
      //   where: {
      //     // id: params.id
      //     // id: body.id
      //   },
      //   data: {
      //     content: body.content,
      //   },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'UPDATE data comment failed', error: error },
      { status: 500 }
    );
  }
};

export const DELETE = async (req, context) => {
  try {
    const { params } = context;
    const response = await prisma.comment.delete({
      // TODO Juga
      //   where: {
      //     id: params.id,
      //   },
    });
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'DELETE data comment failed', error: error },
      { status: 500 }
    );
  }
};
