import mongoose from 'mongoose'


const daySchema = mongoose.Schema({
    date: Date,
    splitCards: [{type: mongoose.Schema.Types.ObjectId, ref: 'SplitCard'}]
})

const dayMessage = mongoose.model('Day', daySchema)
export default dayMessage