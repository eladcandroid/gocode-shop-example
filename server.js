const express = require("express");
const app = express();
const fs = require("fs");
const mongoose = require("mongoose");
// const path = require('path');

require("dotenv").config();

const TodoSchema = mongoose.Schema({
  userId: Number,
  title: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todo", TodoSchema);

app.use(express.json());

app.use(express.static("client/build"));

app.post("/api/admin", (req, res) => {
  const { username, password } = req.body;
  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    res.send({ creditnum: 423423423432 });
  } else {
    res.send("Not authorized!");
  }
});

app.get("/api/todos", (req, res) => {
  const { title } = req.query;
  //   fs.readFile("todos.json", "utf8", (err, todos) => {
  Todo.find({})
    .exec()
    .then((todosArr) => {
      // const todosArr = JSON.parse(todos);
      if (title) {
        const todosFiltered = todosArr.filter((todo) =>
          todo.title.includes(title)
        );
        res.send(
          todosFiltered.length ? todosFiltered : "No data found for your query"
        );
      } else {
        res.send(todosArr);
      }
    });
});

// app.get("/api/todos/:id", (req, res) => {
//   Todo.find({})
//   .exec()
//   .then((todosArr) => {
//     // const todosArr = JSON.parse(todos);
//     if (title) {
//       const todosFiltered = todosArr.filter((todo) =>
//         todo.title.includes(title)
//       );
//       res.send(
//         todosFiltered.length ? todosFiltered : "No data found for your query"
//       );
//     } else {
//       res.send(todosArr);
//     }
//   });
// });

app.post("/api/todos", (req, res) => {
  //   fs.readFile("todos.json", "utf8", (err, todos) => {
  // const todosArr = JSON.parse(todos);
  Todo.insertMany([
    {
      userId: 1,
      title: req.body.title,
      completed: false,
    },
  ]).then((addedTodo) => {
    // todosArr.push({
    //   userId: 1,
    //   id: todosArr.length + 1,
    //   title: req.body.title,
    //   completed: false,
    // });
    // fs.writeFile("todos.json", JSON.stringify(todosArr), (err) => {
    //   console.log(err);
    res.send(addedTodo);
  });
  //   });
});

app.put("/api/todos/:id", (req, res) => {
  fs.readFile("todos.json", "utf8", (err, todos) => {
    const todosArr = JSON.parse(todos);

    const { title, completed = false } = req.body;
    const { id } = req.params;

    const updatedTodosArr = todosArr.map((todo) => {
      if (todo.id === +id) {
        return {
          ...todo,
          title,
          completed,
        };
      } else {
        return todo;
      }
    });

    fs.writeFile("todos.json", JSON.stringify(updatedTodosArr), (err) => {
      console.log(err);
      res.send("Success");
    });
  });
});

app.delete("/api/todos/:id", (req, res) => {
  fs.readFile("todos.json", "utf8", (err, todos) => {
    const todosArr = JSON.parse(todos);
    const updatedTodosArr = todosArr.filter(
      (todo) => todo.id !== +req.params.id
    );

    fs.writeFile("todos.json", JSON.stringify(updatedTodosArr), (err) => {
      console.log(err);
      res.send("Success");
    });
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("Connected!");
    app.listen(process.env.PORT || 5000);
  });
