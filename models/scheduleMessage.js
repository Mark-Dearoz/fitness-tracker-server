import mongoose, { Types } from 'mongoose'

const scheduleSchema = mongoose.Schema({
    date: Date,
    muscleGroupId: {type: Types.ObjectId, ref: 'MuscleGroup'},
    workouts: [{type: Types.ObjectId, ref: 'Workout'}]
})

const scheduleMessage = mongoose.model('Schedule', scheduleSchema)
export default scheduleMessage