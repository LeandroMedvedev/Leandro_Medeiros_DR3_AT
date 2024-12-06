export default async function fetchProducts() {
  const API_URL =
    'https://dfef-dmrn-tps-default-rtdb.firebaseio.com/products.json';
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Erro ao buscar produtos.');
    }
    const data = await response.json();
    return Object.values(data);
  } catch (error) {
    console.error(error.message);
    return [];
  }
}
