import axios from 'axios';

export const fetchCatalog = async () => {
  try {
    const response = await axios.get('/api/catalog');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch catalog');
  }
};