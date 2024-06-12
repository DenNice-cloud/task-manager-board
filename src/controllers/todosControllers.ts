import { Request, Response } from 'express';
import { todoService } from '../services/todosServices';

export const todosControllers ={
  getAllTodos: async (_: Request, res: Response) => {
    try {
      const todos = await todoService.getAlltodos();

      res.status(200).send(todos);
    } catch (error) {
      res.status(500).send({ error: 'Failed to fetch todos' });
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
  deleteTodo: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await todoService.remove(Number(id))
      
      res.status(200).send();
    } catch (error) {
      res.status(500).send({ error: 'Failed to delete todos' });
    }
  },
  updateTodo: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const todo = await todoService.update(parseInt(id), req.body);

      res.status(201).send(todo);
    } catch (error) {
      res.status(500).send({ error: 'Failed to update todo' });
    }
  }, 
  updateTodoStatus: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
      const updatedTodo = await todoService.updateStatus(parseInt(id), status);

      res.status(201).send(updatedTodo);
    } catch (error) {
      res.status(500).send({ error: 'Failed to update todo status' });
    }
  }, 
};
