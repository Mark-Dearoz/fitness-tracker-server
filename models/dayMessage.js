import mongoose from 'mongoose'


const daySchema = mongoose.Schema({
    date: Date,
    splitCards: [{type: mongoose.Schema.Types.ObjectId, ref: 'SplitCard'}]
})

const DayMessage = mongoose.model('Day', daySchema)
export default DayMessage