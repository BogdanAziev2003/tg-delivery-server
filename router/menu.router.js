import express from 'express'
import {
  getAllMenu,
  changeStock,
  createOrder,
  getOrders,
  getImage,
  getOriginOrders,
  createOriginOrder
} from '../controllers/menu.controllers.js'

const router = express.Router()

router.get('/getAll', getAllMenu)
router.put('/changeInStock', changeStock)
router.post('/createOrder', createOrder)
router.post('/createOriginOrder', createOriginOrder)
router.get('/getOrders', getOrders)
router.get('/getOriginOrders', getOriginOrders)


router.get('/image/:imageName', getImage)

export default router
