import HttpStatus, { REQUEST_HEADER_FIELDS_TOO_LARGE } from 'http-status-codes';
import jwt from 'jsonwebtoken';

/**
 * Middleware to authenticate if user has a valid Authorization token
 * Authorization: Bearer <token>
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export const userAuth = async (req, res, next) => {
  try {
    let bearerToken = req.header('Authorization');
    if (!bearerToken)
      throw {
        code: HttpStatus.BAD_REQUEST,
        message: 'Authorization token is required'
      };
      console.log("bearer" ,bearerToken);
    // bearerToken = bearerToken.split(' ')[1];

    const  { user }= jwt.verify(bearerToken, process.env.SECRETTOKEN, ((err, decoder) => {
      if (err) {
        return res.status(HttpStatus.UNAUTHORIZED).send({ message: "UNATHORIZED" });
      } else {
        req.body['data'] = decoder;
        //bearerToken=decoder
        next();
      }
    }));
    console.log(user,"auth")
    // res.locals.user = user;
     //res.locals.token = bearerToken;
    next();
  } catch (error) {
    next(error);
  }
};
