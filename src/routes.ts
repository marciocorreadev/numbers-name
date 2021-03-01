import { Router } from 'express'
import IndexController from '@controllers/IndexController'
import NumberNameController from '@controllers/NumberNameController'

const router = Router()
const indexController = new IndexController()
const numberNameController = new NumberNameController()

router.get('/ping', indexController.ping)
router.get('/:number', numberNameController.get)

export default router