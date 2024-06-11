const express = require("express");
// const { todosRoter } = require("./routes/todosRoutes");
import { todosRouter } from "./routes/todosRoutes";

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());

app.use("/", todosRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
