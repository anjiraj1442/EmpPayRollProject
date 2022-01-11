import express from 'express'
import * as empController from '../controllers/emp.controller'
import { newUserValidator } from '../validators/user.validator'
import {userAuth} from '../middlewares/auth.middleware'
const router = express.Router()
//add new employee
router.post('/addemployee', userAuth,  empController.addNewEmpC);

export default router;