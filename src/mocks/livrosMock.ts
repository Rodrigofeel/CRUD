export const livrosMock = [
  {
    id: 1,
    titulo: "1984",
    autor: "George Orwell",
    resumo:
      "Ditadura futurista que controla tudo. Protagonista tenta se rebelar mas é destruído pelo sistema. Grande Irmão te vigia.",
  },
  {
    id: 2,
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    resumo:
      "Hobbit precisa destruir anel mágico para salvar o mundo. Jornada épica com elfos, magos e batalhas.",
  },
  {
    id: 3,
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    resumo:
      "Bentinho acha que a esposa Capitu o traiu com o melhor amigo. Machado nunca revela a verdade.",
  },
];

let nextId = 4;

export const listarAll = () => livrosMock;

export const getLivroByTituloMock = (titulo: string) => {
  return livrosMock.filter((livro) =>
    livro.titulo.toLowerCase().includes(titulo.toLowerCase()),
  );
};

export const criarLivroMock = (
  titulo: string,
  autor: string,
  resumo?: string,
) => {
  const novoLivro = { id: nextId++, titulo, autor, resumo: resumo || "" };
  livrosMock.push(novoLivro);
  return novoLivro;
};

export const atualizarLivroMock = (
  id: number,
  dados: { titulo?: string; autor?: string; resumo?: string },
) => {
  const index = livrosMock.findIndex((l) => l.id === id);
  if (index === -1) return null;
  livrosMock[index] = { ...livrosMock[index], ...dados };
  return livrosMock[index];
};

export const deletarLivroMock = (id: number) => {
  const index = livrosMock.findIndex((l) => l.id === id);
  if (index === -1) return false;
  livrosMock.splice(index, 1);
  return true;
};
