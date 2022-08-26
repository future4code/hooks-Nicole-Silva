import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users } from "./data";
import { posts } from "./data";
import { preProcessFile } from "typescript";

const app = express();

app.use(express.json());
app.use(cors());

/* app.get("/", (req, res) => {          
    res.send("Hello from Express")
}) */

app.get("/users", (req, res) => {
  const usuarios = users.map((usuario) => {
    return usuario;
  });
  res.send(usuarios);
});

app.get("/posts", (req, res) => {
  const postagens = posts.map((post) => {
    return post;
  });
  res.send(postagens);
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
