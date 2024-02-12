export const apiUrl = process.env.API_URL;

export async function getContent(lng: string) {
  try {
    const res = await fetch(`${apiUrl}/content/?lang=${lng}`, {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch the data');
    return res.json();
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}

export async function getCategories(lng: string) {
  try {
    const res = await fetch(`${apiUrl}/categories/?lang=${lng}`, {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch the data');
    return res.json();
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}

export async function getCategoriesDetails(id: string, lng: string) {
  try {
    const res = await fetch(`${apiUrl}/categories/${id}?lang=${lng}`, {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch the data');
    return res.json();
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}

export async function getTopicsDetails(id: number, lng: string) {
  try {
    const res = await fetch(`${apiUrl}/topics/${id}?lang=${lng}`, {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch the diplomat details');
    return res.json();
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}
