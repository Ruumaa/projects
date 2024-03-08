import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: [
        {
          created_at: 'desc',
        },
      ],
      include: {
        Comment: true,
      },
    });
    return NextResponse.json(
      { message: 'GET blog success', data: blogs },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'GET data blog failed', error: error },
      { status: 500 }
    );
  }
};
