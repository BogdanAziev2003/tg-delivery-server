import { icecreamPool as db } from "../db.js"
import icecream from "../sql/icecream.js"

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