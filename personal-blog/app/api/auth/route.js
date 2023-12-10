import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';

export const POST = async (req) => {
  try {
    const { username, email, password } = await req.json();
    const existingEmail = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (existingEmail) {
      return NextResponse.json(
        { message: 'Email already exist', user: null },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
      select: {
        username: true,
        email: true,
      },
    });
    return NextResponse.json(
      {
        message: 'Register success',
        data: newUser,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Failed POST user', error: error },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    const response = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
      },
    });
    return NextResponse.json(
      {
        message: 'GET user success',
        data: response,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Failed GET user', error: error },
      { status: 500 }
    );
  }
};
