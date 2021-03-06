import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'


import muscleGroupsRoutes from './routes/muscleGroups.js'
import exerciseRoutes  from './routes/exercises.js'
import workoutsRoutes from './routes/workouts.js'
import maxRoutes from './routes/max.js'
import userRoutes from './routes/users.js'

const app = express()
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
app.use(cors())


app.use('/exercises',exerciseRoutes)
app.use('/musclegroups', muscleGroupsRoutes)
app.use('/workouts', workoutsRoutes)
app.use('/max', maxRoutes)
app.use('/user', userRoutes)

const CONNECTION_URL = 'mongodb+srv://fitnesstrackerserver:WLSOqTQKLK5I1FTK@cluster0.7ycuo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch(error => console.log(error.message))

mongoose.set('useFindAndModify', false)