import express from 'express'
import userController from '../controller/controller.js';
const router = express.Router();

router.get('/index', userController.homePage)
router.get('/', userController.retriveAll)
router.post('/events', userController.createDoc)



export default router