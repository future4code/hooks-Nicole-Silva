import express from "express";
import cors from "cors";
import { contas } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/usuarios", (req, res) => {
  try {
    const { nome, CPF, dataNascimento1 } = req.body;

    const [dia, mês, ano] = dataNascimento1.split("/");
    const dataNascimento: Date = new Date(`${ano}-${mês}-${dia}`);

    const idade1: number = Date.now() - dataNascimento.getTime();
    const idade2: number = idade1 / 1000 / 60 / 60 / 24 / 365;

    if (idade2 < 18) {
      res.statusCode = 406;
      throw new Error("A idade do usuário tem que ser maior que 18 anos.");
    }

    contas.push({
      nome,
      CPF,
      dataNascimento,
      saldo: 0,
      extrato: [],
    });
    res.status(201).send("Usuário criado com sucesso!");
  } catch (error: any) {
    res.send(error.message);
  }
});

app.get("/usuarios/todos", (req, res) => {
  try {
    res.status(200).send(contas);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

app.listen(3003, () => console.log("O servidor está online na porta 3003"));
