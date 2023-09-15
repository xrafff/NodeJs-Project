import express, { Request, Response, NextFunction } from "express";
const app = express();

app.use(express.json());

// Importando o pacote express-async-errors para lidar com erros assíncronos
import "express-async-errors";

// Importando as rotas
import { router } from "./routes";

// Adicionando as rotas ao aplicativo
app.use(router);

// Middleware para lidar com erros
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);

// Iniciando o servidor
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
