import express from "express";
import { getMenu, getImage } from "../controllers/icecream.controller.js";


const icecreamRouter = express.Router();

icecreamRouter.get("/get-menu", getMenu);

icecreamRouter.get("/image/:imageName", getImage);

export default icecreamRouter;
