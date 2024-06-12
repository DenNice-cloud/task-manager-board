import prisma from "../utils/db";
import { Todo, TodoStatus } from "@prisma/client"; 

export const todoService = {
  getAlltodos: async () => {
    return await prisma.todo.findMany();
  },
  create: async (title: string, description: string): Promise<Todo> => {
    return await prisma.todo.create({
      data: {
        title,
        description,
        status: "TODO",
      },
    });
  },
  remove: async (id: number) => {
    await prisma.todo.delete({
      where: { id },
    });
  },
  update: async (id: number, data: { title?: string, description?: string }): Promise<Todo> => {
    return await prisma.todo.update({
      where: { id },
      data: data,
    });
  },
  updateStatus: async (id: number, status: TodoStatus): Promise<Todo> => {
    return await prisma.todo.update({
      where: { id },
      data: { status },
    });
  },
};
