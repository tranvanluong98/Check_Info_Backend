const express =  require('express');
const apiRouter = express.Router()

// Add others API

const userRouter = require('./userRouter')
const authRouter = require('./authRouter')
apiRouter.get('/',(req,res)=>{
    res.send('this is api origin!')
})

apiRouter.use('/users',userRouter)
apiRouter.use('/auth',authRouter)
module.exports = apiRouter;