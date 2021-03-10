import mongoose from 'mongoose'
import DayMessage from '../models/dayMessage.js'

export const getDays = async(req, res)=>{
    try{
        const dayMessage = await DayMessage.find()

        res.status(200).json(dayMessage)
    }catch(error){
        res.status(404).json({message: error.message})
    }
}