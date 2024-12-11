export const BASE_URL =
  'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/';

export const PROJECTS = [
  { label: '01', route: 'Project01' },
  { label: '02', route: 'Project02' },
  { label: '03', route: 'Project03' },
];

export const TRANSACTIONS = [
  {
    id: '1',
    description: 'Compra no mercado',
    value: 150.0,
    date: '2024-01-01',
    hour: '14:30',
    category: 'Alimentação',
    type: 'Despesa',
    currency: 'BRL',
  },
  {
    id: '2',
    description: 'Salário',
    value: 5000.0,
    date: '2024-01-05',
    hour: '09:00',
    category: 'Receita',
    type: 'Receita',
    currency: 'USD',
  },
];
