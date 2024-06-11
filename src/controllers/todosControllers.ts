import { Request, Response } from 'express';
import { todoService } from '../services/todosServices';

export const todosControllers ={
  getAllTodos: async (req: Request, res: Response) => {
    try {
      const todos = await todoService.getAlltodos();

      res.status(200).send(todos);
    } catch (error) {
      res.status(500).send({ error: 'Failed to fetch products' });
    }
  },
  deleteTodo: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await todoService.remove(Number(id))
      
      res.status(200).send();
    } catch (error) {
      res.status(500).send({ error: 'Failed to delete products' });
    }
  },
  createTodo: async (req: Request, res: Response) => {
    try {
      const { title, description } = req.body;
      const todo = await todoService.create(title, description);

      res.status(201).send(todo);
    } catch (error) {
      res.status(500).send({ error: 'Failed to create todo' });
    }
  },
};
