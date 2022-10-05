export type Livro = {
  id: string;
  título: string;
  preço: number;
};

export const livros: Livro[] = [
  {
    id: "1",
    título: "O Grito de Eva",
    preço: 32.41,
  },
  {
    id: "2",
    título: "O Sanatório",
    preço: 36.99,
  },
  {
    id: "3",
    título: "A devolvida",
    preço: 14.99,
  },
  {
    id: "4",
    título: "Muheres que amam psicopatas",
    preço: 41.41,
  },
];
