import express, {Express} from "express"
import cors from "cors" 
import { users, User, USER_TYPE } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

/* Ex 1 
a - get
b - users */

app.get("/users", (req, res) => {
    const usuarios = users.map((usuario: any) => {
        return usuario;
      });
      res.send(usuarios);
    });

/* Ex 2
a - Via query params
b - Fazendo a validação */

app.get("/type", (req, res) => {
  try {
    let type = req.query.type as string
    let search = req.query.search as string

    if (type) {
      type = type.toUpperCase()

      if (type in USER_TYPE) {
        const result = users.filter(user => user.type === type)
        return res.status(200).send(result)
      }

      throw new Error("Tipo inválido")
    }

    if (search) {
      search = search.toLowerCase()

      const result = users.filter(
        user => user.name.toLowerCase().includes(search)
      )

      console.log(result, search)

      if (result.length === 0) {
        return res.status(204).send("Usuário não encontrado")
      }
      
      return res.status(200).send(result)
    }

    res.status(200).send(users)
  } catch (error: any) {
    res.status(400).send(error.message)
  }
})


/* 3
a - Query params */

app.get("/name", (req, res) => {
  let errorCode = 400
  try {
    const name: string = req.query.name as string

    const user: User | undefined = users.find((user) => user.name === name)

    if (!user) {
      errorCode = 404
      throw new Error("Usuário não encontrado")
    }
    res.send(user)

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

/* 4 - 
a - Não mudou 
b - Não, porque a convenção diz que novos itens sejam aplicados pelo POST */
    
app.post("/users", (req, res) => {
  let errorCode = 400
  try {
    const { id, name, email, type, age } : User = req.body
    
    if (!id || !name || !email || !type ||  !age) {
      throw new Error("Um ou mais campos estão vazios")
    }

    const newUser: User = {
      id,
      name,
      email,
      type,
      age
    }

    users.push(newUser)
        res.send("Usuário criado")

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

app.put("/users", (req, res) => {
  let errorCode = 400
  try {
    const { id, name, email, type, age } : User = req.body
    
    if (!id || !name || !email || !type ||  !age) {
      throw new Error("Um ou mais campos estão vazios")
    }

    const newUser: User = {
      id,
      name,
      email,
      type,
      age
    }

    users.push(newUser)
        res.send("Usuário criado")

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})



app.listen(3003, () => console.log("O servidor está online na porta 3003"))