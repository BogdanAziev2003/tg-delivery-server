import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import menuRouter from "./router/menu.router.js";
import rioRouter from "./router/rio.router.js";

dotenv.config();
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*", // Разрешить запросы от любого источника
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/menu", menuRouter);
app.use("/api/rio", rioRouter);
