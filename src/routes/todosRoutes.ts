import express from 'express';
import { todosControllers } from '../controllers/todosControllers';

export const todosRouter = express.Router();

todosRouter.get("/", todosControllers.getAllTodos);
todosRouter.delete("/:id", todosControllers.deleteTodo);
todosRouter.post('/', todosControllers.createTodo);
todosRouter.patch('/:id', todosControllers.updateTodo);
