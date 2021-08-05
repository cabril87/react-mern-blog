import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import postRoutes from './routes/post.js'

dotenv.config()

const app = express()

app.use('/post', postRoutes)

app.use(express.json({limit: "30 mb", extended: true}))
app.use(express.urlencoded({limit: "30 mb", extended: true}))
app.use(cors());

const PORT = process.env.PORT || 4000

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((err) => console.log(err.message))

mongoose.set('useFindAndModify', false)

