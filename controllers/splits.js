import mongoose from 'mongoose'
import SplitMessage from '../models/splitMessage.js'

export const getSplits = async(req, res) =>{
    try{
        const splitMessages = await SplitMessage.find()

        res.status(200).json(splitMessages)
    }catch(error){
        res.status(404).json({message: errpr.message})
    }
}

export const createSplit = async (req, res) =>{
    console.log(req.body)
    const split = req.body

    const newSplit = new SplitMessage(split)
    try{
        await newSplit.save()

        res.status(201).json(newSplit)
    } catch(error) {
        res.status(409).json({message: error.message})
    }
}

export const deleteSplit = async (req, res) =>{
    console.log(req.params)
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('ID not found')

    await SplitMessage.findByIdAndRemove(id)
    res.json({message: 'Deleted sucessfully'})
}

export const patchSplit = async (req, res) =>{
    const split = req.body
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('ID not found')

    try{
        await SplitMessage.findByIdAndUpdate(id, split)
        res.status(202).json({_id: id, ...split})
    }catch(error){
        res.status(409).json({message: error.message})
    }
    

}