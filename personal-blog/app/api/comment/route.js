import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  try {
    const body = await req.json();
    const response = await prisma.comment.create({
      data: {
        text: body.text,
        userId: body.userId,
        blogId: body.blogId,
      },
    });
    return NextResponse.json(
      { message: 'Comment added successfully', data: response },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'POST data comment failed', error: error, url: req.url },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    const response = await prisma.comment.findMany();
    return NextResponse.json(
      { message: 'GET data comment success ', data: response },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'GET data comment failed', error: error, url: req.url },
      { status: 500 }
    );
  }
};
