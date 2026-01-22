import { Request, Response } from "express";
import { LivroService } from "../services/livroService";
// import { prisma } from "../lib/prisma";

const livroService = new LivroService();

export async function ListarLivros(req: Request, res: Response): Promise<void> {
  try {
    const livros = await livroService.listarAll();
    res.json(livros);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar livros" });
  }
}

export async function GetLivroByTitulo(
  req: Request,
  res: Response,
): Promise<void> {
  const { titulo } = req.query;

  try {
    const livro = await livroService.getLivroByTitulo(String(titulo));
    if (!livro) {
      res.status(404).json({ error: "Livro não encontrado" });
      return;
    }
    res.json(livro);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erro desconhecido";
    res.status(500).json({ error: message });
  }
}

export async function CreateLivro(req: Request, res: Response): Promise<void> {
  const { titulo, autor, resumo } = req.body;

  if (!titulo || !autor) {
    res.status(400).json({ error: "Título e Autor são obrigatórios" });
    return;
  }

  try {
    const newLivro = await livroService.criarLivro(titulo, autor, resumo);
    res.status(201).json(newLivro);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erro desconhecido";
    res.status(500).json({ error: message });
  }
}

export async function AtualizarLivro(
  req: Request,
  res: Response,
): Promise<void> {
  const { id } = req.params;
  const { titulo, autor, resumo } = req.body;
  try {
    const livroAtualizado = await livroService.atualizarLivro(Number(id), {
      titulo,
      autor,
      resumo,
    });
    res.json(livroAtualizado);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erro desconhecido";
    res.status(500).json({ error: message });
  }
}

export async function DeletarLivros(
  req: Request,
  res: Response,
): Promise<void> {
  const { id } = req.params;

  try {
    await livroService.deletarLivro(Number(id));

    res.status(204).send();
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro ao excluir";
    res.status(500).json({ error: message });
  }
}
