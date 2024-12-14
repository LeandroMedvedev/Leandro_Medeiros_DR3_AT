import { NASA_IMAGES_API_SEARCH_URL } from '../../constants';

export default async function fetchImagesByAstro(astro, page = 1) {
  try {
    const response = await fetch(
      `${NASA_IMAGES_API_SEARCH_URL}?q=${astro}&page=${page}`
    );
    const data = await response.json();
    const totalItems = data.collection.metadata.total_hits; // Total de itens
    const items = data.collection.items.map((item) => ({
      id: item.data[0].nasa_id,
      title: item.data[0].title,
      description: item.data[0].description,
      imageUrl: item.links?.[0]?.href,
    }));

    return { items, totalItems };
  } catch (error) {
    console.error('Erro ao buscar dados na API Nasa:', error);
    throw error;
  }
}
