const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path')

dotenv.config()
app.use(express.json())
 
if (process.env.NODE_ENV === 'local') {
    app.use(cors({
        origin: 'http://localhost:5173',
        credentials: true
    }))
} else {
    app.use(cors({
        credentials: true
    }))
}

app.use('/api', require('./routes/designRoutes'))
app.use('/api', require('./routes/authRoutes'))


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "./frontend/dist")))
    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname, "./", "frontend", "dist","index.html"))
    })
}
 
  
const dbConnect = async () => {
    try {
        if (process.env.NODE_ENV === 'local') {
            await mongoose.connect(process.env.LOCAL_DB_URI)
            console.log('Local Database Is Connected..')
        } else {
            await mongoose.connect(process.env.MONGODB_URI)
            console.log('Production Database Is Connected..')
        }
         
    } catch (error) {
        console.log('Database connection Failed.')
    }
}
dbConnect()

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server is runing on port ${PORT}..`))