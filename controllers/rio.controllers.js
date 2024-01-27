import { rioPool as db } from "../db.js";
import rio from "../sql/rio.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

export const getMenu = async (req, res) => {
  try {
    const menu = await db.query(rio.getMenu());

    res.status(200).json(menu.rows);
  } catch (error) {
    res.status(500).json({
      message: "Не удалось получить меню",
      error: error,
    });
  }
};

export const changeStock = async (req, res) => {
  try {
    const { id } = req.body;
    await db.query(rio.changeStock(id));
    res.status(204).json("Поле было изменено");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось изменить поле",
      error: error,
    });
  }
};

export const getGoodsNames = async (req, res) => {
  try {
    const menu = await db.query(rio.getGoodsNames());
    res.status(200).json(menu.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось получить данные",
      error: error,
    });
  }
};

export const getImage = (req, res) => {
  let imageName = req.params.imageName;

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "./../images/Compressed", imageName));
};
