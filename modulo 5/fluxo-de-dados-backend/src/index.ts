import cors from "cors"
import express from "express"
import { Livro, livros } from "./data"

const app = express()

app.use (express.json())
app.use(cors())

app.get("/test", (req, res) => {
    res.send("API online!")
  })

  app.post("/livros", (req, res) => {
    try {
      const título = req.body.name
      const preço = req.body.price
  
      if (!título || !preço) {
        throw new Error("Faltando o título e/ou preço")
      }
  
      if (typeof título !== "string") {
        throw new Error("O campo título deve ser uma string")
      }
  
      if (typeof preço !== "number" || preço <= 0) {
        throw new Error("O preço deve ser um numero maior que zero")
      }
  
      const novoLivro: Livro = {
        id: Date.now().toString(),
        título,
        preço
      }
  
      livros.push(novoLivro)
  
      res.send(livros)
  
    } catch (error: any) {
      switch (error.message) {
        case "Faltando título e/ou preço":
          res.status(422)
          break
        case "O campo título deve ser uma string":
          res.status(422)
          break
        case "O preço deve ser um número maior que zero":
          res.status(422)
          break
        default:
          res.status(500)
      }
  
      res.send(error.message || "Erro inesperado")
    }
  })
  app.get("/livros", (req, res) => {
    try {
      res.send(livros)
  
    } catch (error: any) {
      res.send(error.message || "Erro")
    }
  })

  app.put("/livros/:id", (req, res) => {
    try {
      const id = req.params.id
      const novoPreço = req.body.preço
  
      if (!novoPreço && novoPreço !== 0) {
        throw new Error("Está faltando o preço")
      }
  
      if (typeof novoPreço !== "number" || novoPreço <= 0) {
        throw new Error("O preço deve ser um número maior que zero")
      }
  
      let bookFound = false
  
      for (let i = 0; i < livros.length; i++) {
        if (livros[i].id === id) {
          livros[i].preço = novoPreço
          bookFound = true
        }
      }
  
      if (!bookFound) {
        throw new Error("Livro não encontrado")
      }
  
      res.send(livros)
  
    } catch (error: any) {
      switch (error.message) {
        case "Faltando o parametro: preço":
          res.status(422)
          break
        case "O preço deve ser um número maior que zero":
          res.status(422)
          break
        case "Livro não encontrado":
          res.status(404)
          break
        default:
          res.status(500)
      }
  
      res.send(error.message || "Erro inesperado")
    }
  })

  app.delete("/livros/:id", (req, res) => {
    try {
      const id = req.params.id
  
      let bookFound = false
  
      for (let i = 0; i < livros.length; i++) {
        if (livros[i].id === id) {
          livros.splice(i, 1)
          bookFound = true
        }
      }
  
      if (!bookFound) {
        throw new Error("Livro não encontrado")
      }
  
      res.send(livros)
  
    } catch (error: any) {
      switch (error.message) {
        case "Livro não encontrado":
          res.status(404)
          break
        default:
          res.status(500)
      }
      
      res.send(error.message || "Erro inesperado")
    }
  })

app.listen (3003, () => console.log ("O servidor está online na porta 3003"))