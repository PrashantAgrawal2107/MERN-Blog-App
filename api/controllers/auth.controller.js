import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';
import { userInfo } from "os";

export const signup = async (req,res,next) => {
    const {username , email , password} = req.body;

    if(!username || !email || !password || username==='' || email==='' || password===''){
        next(errorHandler(400 , 'All fields are required'));
    }

    if (password.length < 6) {
        return next(errorHandler(400, 'Password must be at least 6 characters'));
    }
    
    if (username.length < 7 || username.length > 20) {
        return next(
        errorHandler(400, 'Username must be between 7 and 20 characters')
        );
    }
    if (username.includes(' ')) {
        return next(errorHandler(400, 'Username cannot contain spaces'));
    }
    if (username !== username.toLowerCase()) {
        return next(errorHandler(400, 'Username must be lowercase'));
    }
    if (!username.match(/^[a-zA-Z0-9]+$/)) {
        return next(
        errorHandler(400, 'Username can only contain letters and numbers')
        );
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
        const token = jwt.sign({ id: validUser._id , isAdmin : validUser.isAdmin}, process.env.JWT_SECRET);
        const { password: pass, ...userInfo } = validUser._doc;

        res.status(200).cookie('access_token', token, {
            httpOnly: true,
        }).json(userInfo);

    }catch(error){
        next(error);
    }

}

export const google = async (req,res,next) => {
    const { email , name , googlePhotoUrl } = req.body;

    try{
        const user = await User.findOne({email});
        if(user){
            const token = jwt.sign({id : user._id , isAdmin : user.isAdmin} , process.env.JWT_SECRET);
            const { password: pass, ...userInfo } = user._doc;
            res.status(200).cookie('access_token', token, {
                httpOnly: true,
            }).json(userInfo);
        }else{
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
            const newUser = new User({
                username: name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4),
                email,
                password: hashedPassword,
                profilePicture: googlePhotoUrl,
            });
            await newUser.save();
            const token = jwt.sign( { id: newUser._id , isAdmin : newUser.isAdmin} ,process.env.JWT_SECRET);
            const { password, ...userInfo } = newUser._doc;
            res.status(200).cookie('access_token', token, { httpOnly: true,}).json(userInfo);
        }
        
    }catch(error){
        next(error);
    }
}