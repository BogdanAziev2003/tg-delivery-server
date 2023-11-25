import db from '../db.js'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

export const getAllMenu = async (req, res) => {
  try {
    const menu = await (await db.query('select * from goods')).rows
    const modifiers = await (await db.query('select * from modifiers')).rows
    const goods_modifiers = await (
      await db.query('select * from goods_modifiers')
    ).rows
    menu.forEach((product) => {
      const id = product.id
      let mod = goods_modifiers
        .filter((el) => el.goods_id === id)
        .map((el) => el.modifiers_id)
      product.modifiers = modifiers.filter((el) => mod.includes(el.id))
      product.modifiers.forEach((el) => {
        el.amount = 0
      })
      if (product.category === 'Сэндвичи') {
        product.snack = 'Фри'
        product.sause = 'Кетчуп'
      }
    })

    let sortedMenu = menu.sort((a, b) => a.id - b.id)

    res.status(200).json(sortedMenu)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Не удалось получить меню' })
  }
}

export const changeStock = async (req, res) => {
  try {
    const { id, inStock } = req.body
    const data = await (
      await db.query(`update goods set inStock = ${inStock} where id = ${id}`)
    ).rows

    res.status(201).json(data)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Не удалось изсенить поле' })
  }
}

export const createOrder = async (req, res) => {
  try {
    const { username, tgId, order, price } = req.body
    let createdTime = new Date(
      Date.now() + 1000 * 60 * -new Date().getTimezoneOffset()
    )
      .toISOString()
      .replace('T', ' ')
      .replace('Z', '')
    console.log(createdTime)
    let resText = db.query(
      `insert into orders (username, tg_id, order_positions, created_on, price) values ($1, $2, $3, $4, $5)`,
      [username, tgId, order, createdTime, price]
    )
    res.status(200).json(resText)
  } catch (error) {
    console.log(error)
    res.status(500).json('Не удалось создать заказ')
  }
}

export const getOrders = async (req, res) => {
  try {
    res.status(200).download('./file.xlsx')
  } catch (error) {
    console.log(error)
    res.status(500).json('Не удалось создать заказ')
  }
}

export const getImage = (req, res) => {
  let imageName = req.params.imageName

  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)
  console.log(__dirname)
  res.sendFile(path.join(__dirname, './../images/', imageName))
}
