import mongoose from 'mongoose'
import scheduleMessage from '../models/scheduleMessage.js'

export const getSchedules = async (req, res) =>{
    try{
        const schedulesMessage = await scheduleMessage.find().populate('workouts')

        res.status(200).json(schedulesMessage)
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

export const getWeek = async (req, res) =>{
    const {page} = req.params
    const date = new Date()
    date.setHours(0)
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)

    page !== undefined ? date.setDate(date.getDate()-page*4) : null
    let ids = []
    const weekMessages = []
    try{
        for(var i = 0; i < 4; i++){
            let schedule = await scheduleMessage.findOne({date: date})
            schedule === null ? schedule = new scheduleMessage({date: date}) : null
            ids.push(schedule._id)
            await schedule.save()
            date.setDate(date.getDate()-1)
        }

        for(var i = 0; i < ids.length; i++){
            const weekMessage = await scheduleMessage.findById(ids[i]).populate('workouts')
            weekMessages.push(weekMessage)
        }
        
        res.status(200).json(weekMessages)
    }catch(error){
        res.status(404).json({message: error.message})
    }
}