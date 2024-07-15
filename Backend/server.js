const express = require("express")
const {ConnectDb,Connectsql} = require("./src/configs/db");
const bookRouter = require("./src/routes/bookRoutes");
const reviewRouter = require("./src/routes/reviewRouter");
const userRouter = require("./src/routes/userRoute");
const auth = require("./src/middlewares/authMiddleware");
const swaggerUi = require("swagger-ui-express");
const openapiSpecification = require("./src/configs/jsDoc");
require('dotenv').config()

const port = process.env.PORT || 9090;
const db_url = process.env.DB_URL
const app = express()

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification))

app.get('/',(req,res)=>{
    res.send('This is the home route')
})

app.use('/api/books',bookRouter)
    app.use('/api/reviews', reviewRouter)
app.use('/user', userRouter)

app.listen(port, async()=>{
    try{
        await ConnectDb(db_url);
       console.log('Connected to the MongoDB')
       await Connectsql;
       console.log('Connected to the MySql')
       console.log(`Server is running at the port ${port}`)
   }
    catch(err){
        console.log(err);
    }
})