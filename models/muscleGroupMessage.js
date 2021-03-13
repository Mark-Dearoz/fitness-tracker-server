import mongoose from 'mongoose'

const muscleGroupSchema = mongoose.Schema({
    muscleGroup: String,
    exercises: [{type: mongoose.Schema.Types.ObjectId, ref: 'Exercise'}]
})

const muscleGroupMessage = mongoose.model('MuscleGroup', muscleGroupSchema)
export default  muscleGroupMessage