import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import splitsRoutes from './routes/splits.js'
import daysRoutes from './routes/days.js'

const app = express()
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
app.use(cors())


app.use('/splits', splitsRoutes)
app.use('/days', daysRoutes)

const CONNECTION_URL = 'mongodb+srv://fitnesstrackerserver:WLSOqTQKLK5I1FTK@cluster0.7ycuo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch(error => console.log(error.message))

mongoose.set('useFindAndModify', false)