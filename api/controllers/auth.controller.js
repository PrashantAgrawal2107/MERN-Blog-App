import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const signup = async (req,res,next) => {
    const {username , email , password} = req.body;

    if(!username || !email || !password || username==='' || email==='' || password===''){
        next(errorHandler(400 , 'All fields are required'));
    }

    const hashedPassword = bcryptjs.hashSync(password , 10);

    const newUser = new User({username , email , password: hashedPassword})
    
    try{
        await newUser.save();
        res.status(201).json({message : "Signup Successfull"});
    }catch(error){
        next(error);
    }
}

export const signin = async (req,res,next) => {
    const { email, password } = req.body;

    if (!email || !password || email === '' || password === '') {
        next(errorHandler(400, 'All fields are required'));
    }

    try{
        const validUser = await User.findOne({ email });
        if (!validUser) {
            return next(errorHandler(404, 'User not found'));
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return next(errorHandler(400, 'Invalid password'));
        }
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: pass, ...userInfo } = validUser._doc;

        res.status(200).cookie('access_token', token, {
            httpOnly: true,
        }).json(userInfo);

    }catch(error){
        next(error);
    }

}