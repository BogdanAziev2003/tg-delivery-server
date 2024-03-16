import express from "express";
import {
  getMenu,
} from "../controllers/sushi.controllers.js";

const sushiRouter = express.Router();

sushiRouter.get("/get-menu", getMenu);

export default sushiRouter;
