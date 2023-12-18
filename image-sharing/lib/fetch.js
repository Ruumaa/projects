import { BASE_URL } from './base_url';

export const getImages = async () => {
  const response = await fetch(`${BASE_URL}/api/images`, { cache: 'no-store' });
  return await response.json();
};

export const uploadeImage = async (userId, imageUrl) => {
  const response = await fetch(`${BASE_URL}/api/images/upload`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: userId,
      imageUrl: imageUrl,
    }),
  });
  return await response.json();
};

export const getUserImages = async (userId) => {
  const response = await getImages();
  const images = await response.data.filter((image) => image.userId === userId);
  return images;
};

export const deleteUserImages = async (id) => {
  const response = await fetch(`${BASE_URL}/api/images/${id}`, {
    method: 'DELETE',
  });

  return response;
};
