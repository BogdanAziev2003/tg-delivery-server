import express from "express";
import {
  getAllMenu,
  changeStock,
  createOrder,
  getOrders,
  getImage,
  getOriginOrders,
  createOriginOrder,
  getGoodsName,
  getModifiersName,
  changeInStockModifiers,
} from "../controllers/menu.controllers.js";

const router = express.Router();

router.get("/getAll", getAllMenu);
router.put("/changeInStock", changeStock);
router.put("/changeInStockModifiers", changeInStockModifiers);
router.post("/createOrder", createOrder);
router.post("/createOriginOrder", createOriginOrder);
router.get("/getOrders", getOrders);
router.get("/getOriginOrders", getOriginOrders);
router.get("/getGoodsName", getGoodsName);
router.get("/getModifiersName", getModifiersName);

router.get("/image/:imageName", getImage);

export default router;
