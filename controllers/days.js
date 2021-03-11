import mongoose from 'mongoose'
import DayMessage from '../models/dayMessage.js'

export const getDays = async(req, res) =>{
    try{
        const dayMessage = await DayMessage.find()

        res.status(200).json(dayMessage)
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

export const getWeek = async(req,res) =>{
    const weekMessage = []
    const {date} = req.body
    const dateObj = new Date(date)
    let month = dateObj.getMonth() + 1
    let day = dateObj.getDate() + 1
    let year = dateObj.getFullYear()
    if(day == 32){
        day = 1
        month++
    }
    while(weekMessage.length < 7){
        try{
             const dateMessage = await DayMessage.findOne({date: `${year}-${month}-${day}`})

             if(dateMessage === null){
                    const newDay = new DayMessage({date: `${year}-${month}-${day}`})
                    try{
                        await newDay.save()
                        weekMessage.push(newDay)
                    }catch(error){
                        res.status(404).json({message: error.message})
                    }   
                }else{
                    weekMessage.push(dateMessage)
                }
            }catch(error){
                res.status(404).json({message: error.message})
            }
        if(day > 1){
            day--
        }else{
            month--
            day = 31
        }
    }
    res.status(200).json(weekMessage)
}

export const createDay = async(req,res) =>{
    const day = req.body
    const newDay = new DayMessage(day)
    console.log(newDay.date)
    try{
        await newDay.save()
        res.status(201).json(newDay)
    }catch(error){
        res.status(409).json({message: error.message})
    }
}

export const deleteDay = async(req, res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('ID not found')

    await DayMessage.findByIdAndRemove(id)
    res.json({message: 'Delete Sucessfully'})
}