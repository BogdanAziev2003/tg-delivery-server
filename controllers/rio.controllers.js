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
            error: error.message,
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
            error: error.message,
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
            error: error.message,
        });
    }
};

export const createOrder = async (req, res) => {
    try {
        const { username, tgId, price } = req.body;
        if (!username || !tgId || !price) {
            return res
                .status(400)
                .json({ message: "Недостаточно данных для создания заказа" });
        }

        const time = new Date(
            Date.now() + 1000 * 60 * -new Date().getTimezoneOffset()
        )
            .toISOString()
            .replace("T", " ")
            .replace("Z", "");

        await db.query(
            `INSERT INTO orders (username, tg_id, time, price) VALUES ($1, $2, $3, $4)`,
            [username, tgId, time, price]
        );

        return res.status(200).json({ message: "Заказ успешно создан" });
    } catch (error) {
        console.error("Ошибка при создании заказа:", error);

        return res.status(500).json({
            message: "Не удалось создать заказ",
            error: error.message,
        });
    }
};

export const getOrders = async (req, res) => {
    try {
        const menu = await db.query(`SELECT * FROM orders`);
        res.status(200).json(menu.rows);
    } catch (error) {
        res.status(500).json({
            message: "Не удалось получить заказы",
            error: error.message,
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
