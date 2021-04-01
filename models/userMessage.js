import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
})

const userMessage = mongoose.model('User', userSchema)
export default userMessage