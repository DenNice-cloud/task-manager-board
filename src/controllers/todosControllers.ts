import { Request, Response } from 'express';
import { todoService } from '../services/todosServices';

export const todosControllers ={
  getAllTodos: async (req: Request, res: Response) => {
    console.log('-------------------------------------------------');
    console.log(`${req.method} request received at ${req.url}`); // <----------------

    try {
      const todos = await todoService.getAlltodos();
      console.log('-------------------------------------------------');
      console.log('Received todos:', todos); // <----------------

      res.status(200).send(todos);
    } catch (error) {
    console.log('-------------------------------------------------');
      console.error('Error fetching todos:', error); // <----------------
      res.status(500).send({ error: 'Failed to fetch todos' });
    }
  },
  deleteTodo: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await todoService.remove(Number(id))
      
      res.status(200).send();
    } catch (error) {
      res.status(500).send({ error: 'Failed to delete todos' });
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
