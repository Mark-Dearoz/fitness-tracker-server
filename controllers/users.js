import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userMessage from '../models/userMessage.js'

export const signIn = async (req, res) => {
    const {email, password} = req.body
    try{
        const existingUser = await userMessage.findOne({email})

        if(!existingUser) return res.status(404).json({message: `Invalid Email`})
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
        if(!isPasswordCorrect) return res.status(404).json({message: 'Invalid Password'})

        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, 'secret', {expiresIn: '24h'})
        res.status(200).json({result: existingUser, token})
    }catch(error){
        res.status(500).json({message: 'Something went wrong'})
    }
}

export const signUp = async (req, res) => {
    const {email, password, confirmPassword} = req.body
    try{
        const existingUser = await userMessage.findOne({email: email})
        if(existingUser) return res.status(404).json({message: `User already exist`})
        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = await userMessage.create({email: email, password: hashedPassword})
        const token = jwt.sign({email: newUser.email, id: newUser._id}, 'secret', {expiresIn: '24h'})
        res.status(200).json({result: newUser, token})
    }catch(error){
        res.status(500).json({message: 'Something went wrong'})
    }
    

}