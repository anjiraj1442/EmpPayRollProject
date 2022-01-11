import express from 'express';
const router = express.Router();
import empRoute from './emp.route';

import userRoute from './user.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome to emppayroll');
  });
  router.use('/users', userRoute);
  router.use('/emp', empRoute);


  return router;
};

export default routes;
