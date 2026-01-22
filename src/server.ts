import express from "express";
import livroRoutes from "./routes/livroRoute";

const app = express();

app.use(express.json());
app.use(livroRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`rodando em http://localhost:${PORT}`);
});
