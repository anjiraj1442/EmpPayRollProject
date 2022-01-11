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
           else{
               res.status(HttpStatus.FORBIDDEN).json({
                 code:HttpStatus.FORBIDDEN,
                 data: "no data",
                 message:' already added'
               })
             }


          }catch(error){
           next(error)

      }
 }

 /**
 * Controller to get Employees
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

 export const getEmpDetaisC = async (req,res,next)=>{
      try{
           const getempdata = await EmpService.getempdataS(req.body,res)
           if(getempdata){
               res.status(HttpStatus.OK).json({
                    code: HttpStatus.OK,
                    data: getempdata,
                    message: 'employee records found'
               })  
          }
          else {
               res.status(HttpStatus.NOT_FOUND).json({
                 code: HttpStatus.NOT_FOUND,
                 data: "",
                 message: ' Employee details not found '
               });
             }
           } catch (error) {
             next(error);
           }
           

     }
 