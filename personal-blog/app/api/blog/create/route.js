import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  try {
    const body = await req.json();
    const response = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        category: body.category,
        userId: body.userId,
      },
    });

    return NextResponse.json(
      {
        message: 'Blog created successfully',
        data: response,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: 'POST blog failed',
        error: error,
      },
      { status: 500 }
    );
  }
};
