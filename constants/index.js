export const AVATAR_URL =
  'https://api.dicebear.com/6.x/bottts/svg?seed=User111';

export const BASE_URL =
  'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/';

export const PROJECTS = [
  { label: '01', route: 'Project01' },
  { label: '02', route: 'Project02' },
  { label: '03', route: 'Project03' },
];

export const TRANSACTIONS = [
  {
    id: 'c6522b83-f7dc-4533-bbec-76efc80429b9',
    description: 'Compra no mercado',
    value: 5000.0,
    date: new Date('2024-01-01'),
    time: new Date('2024-01-01T14:30:00'),
    category: 'Alimentação',
    type: 'Despesa',
    currency: 'BRL',
  },
  {
    id: '17520ece-5655-4445-988b-02c28df5ff89',
    description: 'Salário',
    value: 150.0,
    date: new Date('2024-02-19'),
    time: new Date('2024-02-19T09:00:00'),
    category: 'Renda',
    type: 'Receita',
    currency: 'USD',
  },
];
