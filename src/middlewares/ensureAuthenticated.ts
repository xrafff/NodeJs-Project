import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    // Validar se o token é válido
    const { sub } = verify(token, "123456") as IPayload;
   // request.user_id = sub; // Adicione o sub como user_id no objeto de request, se necessário.
    return next();
  } catch (err) {
    return response.status(401).end();
  }
}
