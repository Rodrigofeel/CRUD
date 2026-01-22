import { prisma } from "../lib/prisma";
import {
  livrosMock,
  getLivroByTituloMock,
  criarLivroMock,
  atualizarLivroMock,
  deletarLivroMock,
} from "../mocks/livrosMock";

export class LivroService {
  async listarAll() {
    return livrosMock; //return await prisma.livro.findMany();
  }

  async getLivroByTitulo(titulo: string) {
    const livro = getLivroByTituloMock;
    return livro;
    //return await prisma.livro.findFirst
    //   where: {
    //     titulo: {
    //       contains: titulo,
    //       mode: "insensitive",
    //     },
    //   },
    // });
  }

  async criarLivro(titulo: string, autor: string, resumo?: string) {
    const novoLivro = criarLivroMock(titulo, autor, resumo);
    return novoLivro;
    // return await prisma.livro.create({
    //   data: {
    //     titulo,
    //     autor,
    //     resumo,
    //   },
    // });
  }

  async atualizarLivro(
    id: number,
    data: { titulo?: string; autor?: string; resumo?: string },
  ) {
    if (data.resumo && data.resumo.length > 500) {
      throw new Error("O resumo não pode exceder 500 caracteres");
    }
    const livroAtualizado = atualizarLivroMock(id, data);
    if (!livroAtualizado) {
      throw new Error("Livro não encontrado");
    }

    return livroAtualizado;
    // return await prisma.livro.update({
    //   where: { id },
    //   data,
    // });
  }

  async deletarLivro(id: number) {
    const deletar = deletarLivroMock(id);
    if (!deletar) {
      throw new Error("Livro nõa encontrado");
    }
    return { message: "removido" };
    // return await prisma.livro.delete({
    //   where: { id },
    // });
  }
}
