import axios from 'axios';

import { BASE_URL } from '../../../../constants/index.js';

const ExchangeService = {
  getCurrencies: async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/Moedas?$top=100&$format=json`
      );
      return response.data.value;
    } catch (error) {
      console.error('Erro ao buscar moedas:', error);
      return [];
    }
  },

  getExchangeRate: async (currency, date) => {
    try {
      const formattedDate = date.split('-').reverse().join('-');
      const response = await axios.get(
        `${BASE_URL}/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='${currency}'&@dataCotacao='${formattedDate}'&$top=1&$format=json`
      );

      return response.data.value[0];
    } catch (error) {
      console.error('Erro ao buscar a taxa de câmbio:', error);
      return null;
    }
  },
};

export default ExchangeService;
