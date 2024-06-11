import prisma from "../utils/db";
import { todos } from "../TempData/TempData";

export const todoService = {
  getAlltodos: async () => {
    // const todos = await prisma.todo.findMany();

    // return todos;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(todos);
      }, 1000);
    });
  },
  create: async (title: string, description: string) => {
    return new Promise((resolve) => {
      const newTodo = {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
        title,
        description,
      };
      todos.push(newTodo);
      resolve(todos);
    });
  },
  remove: async (id: number) => {
    // await todos.destroy({
    //   where: {
    //     id,
    //   },
    // });
    // todos = todos.filter((todo) => todo.id !== id);
    return new Promise((resolve, reject) => {
      const newTodos = todos.filter((todo) => todo.id !== id);

      if (newTodos.length === todos.length) {
        reject(new Error('Todo not found'));
      } else {
        resolve(newTodos);
      }
    });
  },
};
