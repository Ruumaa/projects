import { BASE_URL } from './base_url';

export const getImages = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/images`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error; // Rethrow the error for further handling
  }
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
