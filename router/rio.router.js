import express from "express";
import {
  getMenu,
  changeStock,
  getGoodsNames,
  getImage,
} from "../controllers/rio.controllers.js";

const rioRouter = express.Router();

rioRouter.get("/get-menu", getMenu);
rioRouter.put("/change-stock", changeStock);
rioRouter.get("/get-goods-names", getGoodsNames);

rioRouter.get("/image:imageName", getImage);
export default rioRouter;
