import express from "express";
import {
  getMenu,
  changeStock,
  getGoodsNames,
  getImage,
  createOrder,
  getOrders
} from "../controllers/rio.controllers.js";

const rioRouter = express.Router();

rioRouter.get("/get-menu", getMenu);
rioRouter.put("/change-stock", changeStock);
rioRouter.get("/get-goods-names", getGoodsNames);
rioRouter.post("/create-order", createOrder)
rioRouter.get("/get-orders", getOrders)

rioRouter.get("/image:imageName", getImage);
export default rioRouter;
