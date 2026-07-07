import { Papel } from "./usuario";

export interface ILogin{
  email: string;
  senha: string;
}

export interface ITokenResponse{
  email: string;
  papel: Papel;
  token: string;
}
