import mongoose from 'mongoose'

const splitCardSchema = mongoose.Schema({
    title: String,
    color: String,
    workoutCards: [{type: mongoose.Schema.Types.ObjectId, ref='WorkoutCard'}],
    parent: {type: mongoose.Schema.Types.ObjectId, ref='Day'}
})

const SplitCardMessage = mongoose.model('SplitCard', splitCardSchema)
export default SplitCardMessage