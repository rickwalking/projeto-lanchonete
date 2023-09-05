import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const categoriasNoBanco = await prisma.categoria.findMany();

  if (categoriasNoBanco.length > 0)
    return console.log('Já existem categorias no banco de dados');

  console.log('Criando categorias...');

  const categorias = await prisma.categoria.createMany({
    data: [
      { nome: 'Lanche' },
      { nome: 'Acompanhamento' },
      { nome: 'Bebida' },
      { nome: 'Sobremesa' },
    ],
  });

  console.log(categorias);

  const produtosNoBanco = await prisma.produto.findMany();

  if (produtosNoBanco.length > 0)
    return console.log('Já existem produtos no banco de dados');

  console.log('Criando categorias...');

  const produtos = await prisma.produto.createMany({
    data: [
      {
        nome: 'Hamburguer de Cheddar',
        preco: 20,
        descricao: 'Delicioso Hamburger de Cheddar',
        quantidade: 7,
        categoria_id: 1,
      },
      {
        nome: 'Hamburguer de Queijo',
        preco: 15,
        descricao: 'Delicioso Hamburger de Queijo',
        quantidade: 1,
        categoria_id: 1,
      },
      {
        nome: 'Hamburguer Vegano',
        preco: 25,
        descricao: 'Delicioso Hamburger Vegano',
        quantidade: 1,
        categoria_id: 1,
      },
      {
        nome: 'Coca Cola 2L',
        preco: 9,
        descricao: 'Cola Cola',
        quantidade: 1,
        categoria_id: 3,
      },
      {
        nome: 'Suco de Laranja',
        preco: 10,
        descricao: 'Suco natural de laranja',
        quantidade: 1,
        categoria_id: 3,
      },
      {
        nome: 'Batata Frita',
        preco: 5,
        descricao: 'Fritas tamanho grande',
        quantidade: 1,
        categoria_id: 2,
      },
      {
        nome: 'Pudim',
        preco: 10,
        descricao: 'Pudim de doce de leite',
        quantidade: 1,
        categoria_id: 4,
      },
    ],
  });

  console.log(produtos);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
