export enum Papel{
  CLIENTE = "CLIENTE",
  ADMINISTRADOR = "ADMINISTRADOR",
  GESTOR = "GESTOR"
}

export interface IRegister{
  email: string;
  nome: string;
  senha: string;
  papel: Papel;
}
