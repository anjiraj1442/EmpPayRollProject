import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';

/**
 * Controller to Rigister User
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

export const registerUser = async (req, res, next)=>{
  try{
    const data = await UserService.registerUserService(req.body);
    console.log(data)
    if (data){
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'register successfully'
      })
    }
    else{
      res.status(HttpStatus.FORBIDDEN).json({
        code:HttpStatus.FORBIDDEN,
        data: "no data",
        message:'email already registered'
      })
    }
  }
  catch(error){
    next(error)
  }
}


/**
 * Controller to login User
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */

export const login = async (req,res,next)=>{
  try{
    const data = await UserService.loginUserService(req.body)
    if (data.success == true) {
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: ' User Login successfully'
      });
    }
    else {
      res.status(HttpStatus.FORBIDDEN).json({
        code: HttpStatus.FORBIDDEN,
        data: "",
        message: ' Invalid Details'
      });
    }
  } catch (error) {
    next(error);
  }

};
  
 



/**
 * Controller to get all users available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllUsers = async (req, res, next) => {
  try {
    const data = await UserService.getAllUsers();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All users fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get a single user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getUser = async (req, res, next) => {
  try {
    const data = await UserService.getUser(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'User fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newUser = async (req, res, next) => {
  try {
    const data = await UserService.newUser(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User created successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to update a user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateUser = async (req, res, next) => {
  try {
    const data = await UserService.updateUser(req.params._id, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'User updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to delete a user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteUser = async (req, res, next) => {
  try {
    await UserService.deleteUser(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: [],
      message: 'User deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
