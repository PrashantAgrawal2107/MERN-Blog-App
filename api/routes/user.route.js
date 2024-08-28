import express from 'express';
import { updateUser , deleteUser , signout ,getUsers } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.put('/update/:userId' , verifyToken , updateUser);
router.delete('/delete/:userId' , verifyToken , deleteUser);
router.post('/signout' , verifyToken , signout);
router.get('/getusers' , verifyToken , getUsers);

export default router;