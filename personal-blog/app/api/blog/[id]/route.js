import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export const PATCH = async (req, context) => {
  try {
    const { params } = context;
    const body = await req.json();
    const response = await prisma.blog.update({
      where: {
        id: params.id,
      },
      data: {
        title: body.title,
        content: body.content,
        category: body.category,
        userId: body.userId,
      },
    });
    return NextResponse.json(
      { message: 'Blog updated successfully', data: response },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'PATCH blog failed', error: error },
      { status: 500 }
    );
  }
};

export const DELETE = async (req, context) => {
  try {
    const { params } = context;
    const response = await prisma.blog.delete({
      where: {
        id: params.id,
      },
    });
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'DELETE blog failed', error: error },
      { status: 500 }
    );
  }
};

export const GET = async (req, context) => {
  try {
    const { params } = context;
    const response = await prisma.blog.findUnique({
      where: {
        id: params.id,
      },
      include: {
        Comment: true,
      },
    });
    return NextResponse.json(
      { message: 'Get Blog successfully', data: response },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'GET blog failed', error: error },
      { status: 500 }
    );
  }
};
