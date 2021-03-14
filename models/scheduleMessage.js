import mongoose from 'mongoose'

const scheduleSchema = mongoose.Schema({
    date: Date,
    workouts: [{type: mongoose.Types.ObjectId, ref: 'Workout'}]
})

const scheduleMessage = mongoose.model('Schedule', scheduleSchema)
export default scheduleMessage