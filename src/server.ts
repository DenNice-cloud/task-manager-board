const express = require("express");
// const { todosRoter } = require("./routes/todosRoutes");
import { todosRouter } from "./routes/todosRoutes";

const PORT = process.env.PORT || 3005;
const app = express();

app.use(express.json());

app.use("/", todosRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
