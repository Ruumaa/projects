import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export const GET = async ({ req, context }) => {
  try {
    console.log(context);
    const { params } = context;
    const response = await prisma.blog.findMany({
      where: {
        userId: params.id,
      },
    });
    return NextResponse.json(
      { msessage: 'Get blog user success', data: response },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'GET blog user failed', error: error },
      { status: 500 }
    );
  }
};
