import express from 'express'
import * as empController from '../controllers/emp.controller'
import { newUserValidator } from '../validators/user.validator'
import {userAuth} from '../middlewares/auth.middleware'
const router = express.Router()
//add new employee
router.post('/addemployee', userAuth,  empController.addNewEmpC);
router.get('/getemployee',userAuth, empController.getEmpDetaisC)
router.get('/getallemployee',userAuth, empController.getAllEmpDetaisC)

router.delete('/deleteemployee',userAuth, empController.deleteEmpC)
router.put('/updatedeatails',userAuth,empController.updatedetailsC)
export default router;