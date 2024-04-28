import { icecreamPool as db } from "../db.js"
import icecream from "../sql/icecream.js"
import { fileURLToPath } from "url";
import path, { dirname } from "path";

export const getMenu = async (req, res) => {
  try {
      const menu = await db.query(icecream.getMenu());

      res.status(200).json(menu.rows);
  } catch (error) {
      res.status(500).json({
          message: "Не удалось получить меню",
          error: error.message,
      });
  }
};



export const getImage = (req, res) => {
    let imageName = req.params.imageName;
  
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "./../images/icecream", imageName));
  };
  