export type Transações = {
  valor: number;
  data: Date;
  descrição: string;
};

export type Conta = {
  nome: string;
  CPF: string;
  dataNascimento: Date;
  saldo: number;
  extrato: Array<Transações>;
};

export const contas: Conta[] = [];

