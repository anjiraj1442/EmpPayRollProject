import EmpModel from '../models/emp.model'


export const addNewEmpS = async (req,res)=>{
     var newEmployee = new EmpModel({
          firstName:req.firstName,
          lastName:req.lastName,
          gender:req.gender,
          department:req.department,
          salary:req.salary,
          company:req.company
     })
     return await newEmployee.save()
}
