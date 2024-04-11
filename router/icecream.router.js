import express from "express";
import { getMenu } from "../controllers/icecream.controller.js";


const icecreamRouter = express.Router();

icecreamRouter.get("/get-menu", getMenu);

export default icecreamRouter;
