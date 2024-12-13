import { NASA_APOD_API_URL } from '../../constants';
import { API_KEY } from '@env';

export default async function fetchNasaImages() {
  try {
    const response = await fetch(`${NASA_APOD_API_URL}?api_key=${API_KEY}`);
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar imagens da NASA:', error);
    throw error;
  }
}
