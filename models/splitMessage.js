import mongoose from 'mongoose'

const splitSchema = mongoose.Schema({
    split: String,
    color: String
    
})

const SplitMessage = mongoose.model('SplitMessage', splitSchema)
export default SplitMessage
