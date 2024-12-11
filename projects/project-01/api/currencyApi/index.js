import { BASE_URL } from '../../../../constants';

const getCurrencies = async () => {
  try {
    const response = await fetch(`${BASE_URL}Moedas?$top=100&$format=json`);
    const data = await response.json();

    return data.value;
  } catch (error) {
    console.error('Erro ao buscar moedas:', error);
    return [];
  }
};

export default getCurrencies;
