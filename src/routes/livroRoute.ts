import { Router } from "express";
import {
  AtualizarLivro,
  CreateLivro,
  DeletarLivros,
  GetLivroByTitulo,
  ListarLivros,
} from "../controllers/livroController";

const router = Router();

router.get("/livros", ListarLivros);
router.get("/livros/buscar", GetLivroByTitulo);
router.post("/livros", CreateLivro);
router.put("/livros/:id", AtualizarLivro);
router.delete("/livros/:id", DeletarLivros);

export default router;
