import { base_url } from './base_url';
import prisma from './prisma';

export const getUsername = async (id) => {
  const response = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  return response.username;
};

export const getBlogById = async (id) => {
  const response = await fetch(`${base_url}/api/blog/${id}`, {
    cache: 'no-store',
  });
  const blog = await response.json();
  return blog;
};

export const getBlogUser = async (userId) => {
  const response = await fetch(`${base_url}/api/blog/user/${userId}`, {
    cache: 'no-store',
  });
  const blogs = await response.json();
  return blogs;
};
