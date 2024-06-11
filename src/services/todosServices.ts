import prisma from "../utils/db";

export const todoService = {
  getAlltodos: async () => {
    return await prisma.todo.findMany();
  },
  create: async (title: string, description: string) => {
    return await prisma.todo.create({
      data: {
        title,
        description,
      },
    });
  },
  remove: async (id: number) => {
    await prisma.todo.delete({
      where: { id },
    });
  },
  update: async (id: number, data: { title?: string, description?: string }) => {
    const { title, description } = data;

    return await prisma.todo.update({
      where: { id },
      data: data,
    });
  },
};
