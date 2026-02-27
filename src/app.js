const express = require('express')
const cookieParser = require('cookie-parser')
const authRouter = require('./routers/auth.routes')
const postRouter = require('../src/routers/post.routes')
const app = express();
app.use(cookieParser())
app.use(express.json())


app.use('/api/auth',authRouter)
app.use('/api/post',postRouter)

module.exports = app