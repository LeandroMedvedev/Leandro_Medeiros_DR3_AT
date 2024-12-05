export const TASKS = [
  { label: '01', route: 'Task01' },
  { label: '02', route: 'Task02' },
  { label: '03', route: 'Task03' },
  { label: '04', route: 'Task04' },
  { label: '05', route: 'Task05' },
  { label: '06', route: 'Task06' },
  { label: '07', route: 'Task07' },
  { label: '08', route: 'Task08' },
  { label: '09', route: 'Task09' },
  { label: '10', route: 'Task10' },
  { label: '11', route: 'Task11' },
  { label: '12', route: 'Task12' },
  { label: '13', route: 'Task13' },
  { label: '14', route: 'Task14' },
  { label: '15', route: 'Task15' },
  { label: '16', route: 'Task16' },
];

export const TO_DO = [
  { id: '1', name: 'Comprar pão' },
  { id: '2', name: 'Estudar React Native' },
  { id: '3', name: 'Praticar exercícios' },
  { id: '4', name: 'Assistir à aula' },
  { id: '5', name: 'Passear com cachorro' },
];

export const CATEGORIZED_LIST = [
  {
    title: 'Lista de Exercícios',
    data: ['Fazer TP1', 'Fazer TP2', 'Fazer TP3'],
  },
  {
    title: 'Lista de Compras',
    data: ['Comprar Notebook', 'Comprar Tablet', 'Comprar Celular'],
  },
  {
    title: 'Lista de Tarefas',
    data: ['Passear com cachorro', 'Estudar React Native', 'Pintar casa'],
  },
];

export const QUESTIONS = [
  {
    id: 1,
    question: 'O que é React?',
    options: ['Biblioteca', 'Linguagem', 'Framework', 'Sistema'],
    answer: 'Biblioteca',
  },
  {
    id: 2,
    question: 'Qual linguagem o React usa?',
    options: ['JavaScript', 'Python', 'Ruby', 'PHP'],
    answer: 'JavaScript',
  },
  {
    id: 3,
    question: 'Qual empresa desenvolveu o React?',
    options: ['Google', 'Facebook', 'Microsoft', 'Amazon'],
    answer: 'Facebook',
  },
  {
    id: 4,
    question: 'O que são componentes em React?',
    options: ['Funções', 'Blocos reutilizáveis de código', 'APIs', 'Objetos'],
    answer: 'Blocos reutilizáveis de código',
  },
  {
    id: 5,
    question: 'O que é o JSX?',
    options: [
      'Uma linguagem de programação',
      'Uma extensão de sintaxe para JavaScript',
      'Um tipo de função',
      'Um compilador',
    ],
    answer: 'Uma extensão de sintaxe para JavaScript',
  },

  {
    id: 6,
    question: 'O que é React Native?',
    options: [
      'Um framework para web',
      'Um framework para mobile',
      'Uma biblioteca de JavaScript',
      'Um servidor',
    ],
    answer: 'Um framework para mobile',
  },
  {
    id: 7,
    question: 'Qual a principal vantagem do React Native?',
    options: [
      'Reutilização de código entre plataformas',
      'Performance superior ao código nativo',
      'Facilidade com PHP',
      'Suporte a SQL nativo',
    ],
    answer: 'Reutilização de código entre plataformas',
  },
  {
    id: 8,
    question: 'React Native utiliza qual linguagem para estilização?',
    options: ['CSS', 'Styled Components', 'JavaScript', 'Inline Styles'],
    answer: 'JavaScript',
  },
  {
    id: 9,
    question: 'Como o React Native renderiza componentes?',
    options: ['HTML', 'DOM Virtual', 'Componentes nativos', 'CSS nativo'],
    answer: 'Componentes nativos',
  },
  {
    id: 10,
    question: 'Qual comando é usado para iniciar um novo projeto React Native?',
    options: [
      'npx react-native init',
      'create-react-app',
      'expo start',
      'npm start',
    ],
    answer: 'npx react-native init',
  },
];

const text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolore quas a quam, rerum quod consequatur autem libero nisi perferendis, omnis, impedit exercitationem voluptas dicta alias quia aliquid iusto veniam.';

export const DATA = [
  {
    id: '1',
    title: 'Item A',
    imgUrl: 'https://picsum.photos/100',
    avatar: 'https://via.placeholder.com/100',
    name: 'User 1',
    address: 'Address 1',
    cellPhone: '(##) ## ####-####',
  },
  {
    id: '2',
    title: 'Item B',
    imgUrl: 'https://picsum.photos/100',
    avatar: 'https://via.placeholder.com/100',
    name: 'User 2',
    address: 'Address 2',
    cellPhone: '(##) ## ####-####',
  },
  {
    id: '3',
    title: 'Item C',
    imgUrl: 'https://picsum.photos/100',
    avatar: 'https://via.placeholder.com/100',
    name: 'User 3',
    address: 'Address 3',
    cellPhone: '(##) ## ####-####',
  },
  {
    id: '4',
    title: 'Item D',
    imgUrl: 'https://picsum.photos/100',
    avatar: 'https://via.placeholder.com/100',
    name: 'User 4',
    address: 'Address 4',
    cellPhone: '(##) ## ####-####',
  },
];

export const POSTS = [
  {
    id: '1',
    title: 'Postagem 1',
    summary: 'Lorem ipsum dolor sit amet',
    text: text,
    likes: 10,
    shares: 5,
    date: '01/06/2024',
    author: 'Leland Stottlemeyer',
  },
  {
    id: '2',
    title: 'Postagem 2',
    summary: 'Lorem ipsum dolor sit amet',
    text: text,
    likes: 8,
    shares: 3,
    date: '01/09/2024',
    author: 'Adrian Monk',
  },
  {
    id: '3',
    title: 'Postagem 3',
    summary: 'Lorem ipsum dolor sit amet',
    text: text,
    likes: 15,
    shares: 10,
    date: '01/11/2024',
    author: 'Sharona Fleming',
  },
];

export const PRODUCTS = [
  {
    id: '1',
    name: 'Produto A',
    imgUrl: 'https://via.placeholder.com/150',
    description: 'Lorem ipsum dolor sit amet',
    price: 1999.99,
  },
  {
    id: '2',
    name: 'Produto B',
    imgUrl: 'https://via.placeholder.com/150',
    description: 'Lorem ipsum dolor sit amet',
    price: 999.99,
  },
  {
    id: '3',
    name: 'Produto C',
    imgUrl: 'https://via.placeholder.com/150',
    description: 'Lorem ipsum dolor sit amet',
    price: 8999.99,
  },
];

/*
  URLs para Imagem
  
  https://via.placeholder.com/100?text=Item+A
  https://source.unsplash.com/random/100x100
  https://picsum.photos/100
*/
