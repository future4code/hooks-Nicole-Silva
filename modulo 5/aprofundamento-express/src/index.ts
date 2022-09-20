import express from "express";
import cors from "cors";
import { ToDo } from "./data";
import { tarefas } from "./data";

const app = express();

app.use(express.json());
app.use(cors());


app.get("/ToDo/completed/:trueorfalse", (req, res) => {
  let trueorfalse: any = req.params.trueorfalse;

  if (trueorfalse == "true") {
    trueorfalse = true;
  } else if (trueorfalse == "false") {
    trueorfalse = false;
  } else {
    res.send("error.message");
  }

  const result = [];

  for (let i = 0; i < ToDo.length; i++) {
    if (ToDo[i].completed === trueorfalse) {
      result.push(ToDo[i]);
    }
  }

  res.send(result);
});

app.post("/ToDo", (req, res) => {
  const userId = req.body.userId;
  const title = req.body.title;

  const newToDo: any = {
    userId,
    id: Date.now(),
    title,
    completed: false,
  };

  ToDo.push(newToDo);

  res.send(ToDo);
});

app.put("/ToDo/:id/completed", (req, res) => {
  const id = Number(req.params.id);

  for (let todo of ToDo) {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
  }

  res.send(ToDo);
});

app.delete("/ToDo/:id", (req, res) => {
  const id = Number(req.params.id);

  for (let i = 0; i < ToDo.length; i++) {
    if (ToDo[i].id === id) {
      ToDo.splice(i, 1);
    }
  }

  res.send(ToDo);
});

app.get("/users/:userId/ToDo", (req, res) => {
  const userId = Number(req.params.userId);

  const result = [];

  for (let todo of ToDo) {
    if (todo.userId === userId) {
      result.push(todo);
    }
  }

  res.send(result);
});

app.listen(3003, () => console.log("O servidor está disponível na porta 3003"));
