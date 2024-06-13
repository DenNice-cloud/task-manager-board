const { PrismaClient } = require('@prisma/client');

const express = require("express");
const cors = require("cors");
import { todosRouter } from "./routes/todosRoutes";

const PORT = process.env.PORT || 3005;
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.use(express.static('static'));

app.use("/", todosRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
