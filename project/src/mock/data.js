import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ariel Cavalcante | UX Designer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'UX Designer de Fortaleza - Ceará. Prototipação, pesquisa, ideação, ', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Oi, me chamo ',
  name: 'Ariel',
  subtitle: 'sou ux designer',
  cta: 'saiba mais',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Tenho 27 anos, sol em capricórnio, vários pets e +3 anos de experiência na área.',
  paragraphTwo:
    'Meu design sempre é centrado no usuário, mas tenho visão de produto suficiente pra integrar isso às necessidades do cliente.',
  paragraphThree:
    'Ah, quase esqueci: Sou um homem trans (meus pronomes são ele/dele), então é bastante importante pra mim trabalhar em empresas com políticas de diversidade.',
  paragraphFour: 'Gostasse?',
  cta: 'Olha meu cv bb',
  resume: '../pages/Profile.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'invocado.png',
    title: 'Invocado Chatbot',
    info:
      'Chatbot para conectar pequenos mercadinhos e clientes de forma simples e financeiramente sustentável.',
    info2: 'Pesquisa, validação da ideia, ',
    url: 'https://www.figma.com/file/VtErqaTJCltCIZlE4P2pXh/Invocado-Projeto?node-id=0%3A1',
    repo: 'https://miro.com/app/board/o9J_klCFQdM=/?moveToWidget=3074457349962426401&cot=12', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'psv.jpg',
    title: 'Planeje Sua Viagem',
    info: 'Agência de Viagens digital multimarcas, multidestinos e multicategorias.',
    info2: 'Pesquisa e Benchmark de uma agência de viagens digital.',
    url:
      'https://www.figma.com/proto/dkpukpkpLZQfzgHGklJ7Go/benchmark-portfolio?page-id=406%3A124&node-id=406%3A169&viewport=1281%2C360%2C0.061294399201869965&scaling=scale-down-width&hide-ui=1',
    repo:
      'https://docs.google.com/spreadsheets/d/1KZfuOLHYWOu7Z8zCNYn6rM87YX91HL3PKIaaIQnPn7Q/edit?usp=sharing', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Vamos conversar. Tomar uma cerveja, um suco, um café :)',
  btn: 'Chama aí',
  email: 'ariel.usabilidade@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/aqueleariel',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/arielcavalcante/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/arielcavalcante',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
