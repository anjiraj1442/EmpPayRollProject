import empModel from '../models/emp.model';
import EmpModel from '../models/emp.model'


export const addNewEmpS = async (req,res)=>{
     var newEmployee = new EmpModel({
          firstName:req.firstName,
          lastName:req.lastName,
          gender:req.gender,
          department:req.department,
          salary:req.salary,
          company:req.company,
          startdate:req.startdate,
          notes:req.notes,
          
     })
     return await newEmployee.save()
}
export const getempdataS = async (req, res) => {
     let employeeData = await empModel.findById({ _id: req._id});
     return employeeData;
 };
