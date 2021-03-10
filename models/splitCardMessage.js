import mongoose from 'mongoose'

const splitCardSchema = mongoose.Schema({
    title: String,
    color: String,
    workoutCards: [{type: mongoose.Schema.Types.ObjectId, ref='WorkoutCard'}]
})

const splitCardMessage = mongoose.model('SplitCard', splitCardSchema)
export default splitCardMessage