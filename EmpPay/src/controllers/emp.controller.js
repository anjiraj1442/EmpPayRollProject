import HttpStatus from 'http-status-codes'
import * as EmpService from '../services/emp.service'
/**
 * Controller to Add New Employee
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

 export const addNewEmpC = async (req,res,next)=>{
      try{
           const addnewempdata = await EmpService.addNewEmpS(req.body, res)
           if(addnewempdata){
               res.status(HttpStatus.OK).json({
                    code: HttpStatus.OK,
                    data: addnewempdata,
                    message: 'new employee is added successfully'
               })
           }


      }catch(error){
           next(error)

      }
 }