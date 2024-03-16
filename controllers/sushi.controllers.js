import { sushiPool as db } from "../db.js";
import sushi from "../sql/sushi.js";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

export const getMenu = async (req, res) => {
    try {
        const menu = await db.query(sushi.getMenu());

        res.status(200).json(menu.rows);
    } catch (error) {
        res.status(500).json({
            message: "Не удалось получить меню",
            error: error.message,
        });
    }
};
