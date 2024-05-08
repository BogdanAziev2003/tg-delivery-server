import express from "express";
import { getMenu, getImage, getStock, changeStock } from "../controllers/icecream.controller.js";


const icecreamRouter = express.Router();

icecreamRouter.get("/get-menu", getMenu);
icecreamRouter.get("/get-stock", getStock)
icecreamRouter.put("/change-stock", changeStock)

icecreamRouter.get("/image/:imageName", getImage);

export default icecreamRouter;
